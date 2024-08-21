import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, from, groupBy, map, mergeMap, Observable, reduce, tap, toArray } from 'rxjs';
import { TimeEntryModel } from '../types/time-entry.interface';
import { EmployeeHours } from '../types/employee-hours.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  apiUrl = environment.URLS.TIME_ENTRIES;
    
  constructor(private http: HttpClient){ }

  private getAllTimeEntries(): Observable<TimeEntryModel[]> {
      return this.http.get<TimeEntryModel[]>(this.apiUrl).pipe(
          catchError((err: HttpErrorResponse) => {
              throw new Error('Could not load time entries');
          })
      )
  }

  private getEntryHours(): Observable<EmployeeHours> {
    return this.getAllTimeEntries().pipe(
      mergeMap(timeEntries => from(timeEntries)),
      map(timeEntry => {
        let start = new Date(timeEntry.StarTimeUtc).getTime();
        let end = new Date(timeEntry.EndTimeUtc).getTime();
        let employeeHours: EmployeeHours = {
          name: timeEntry.EmployeeName,
          total: (end-start)/(1000*60*60)
        }
        return employeeHours;
      })
      )
  }

  getEmployeeTotalHours(): Observable<EmployeeHours[]> {
    return this.getEntryHours().pipe(
      groupBy((employeeHours: EmployeeHours) => {
        return employeeHours.name;
      },{element: employeeHours => employeeHours.total}),
      mergeMap((group$ => {
        return group$.pipe(reduce((acc: EmployeeHours, curr: number) => {
              return {
                name: acc.name,
                total: acc.total + curr
              }
            },
            {
              name: group$.key,
              total: 0
            }
        ));
      })),
      toArray(),
      tap((entries)=>{
        entries.sort((a, b) => b.total - a.total);
      })
    )
  }

}
