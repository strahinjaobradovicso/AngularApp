import { Component } from '@angular/core';
import { TimeEntryService } from '../../services/time-entry.service';
import { toSignalWithError } from '../../../utils/signal-with-error';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrl: './time-entries.component.css'
})
export class TimeEntriesComponent {

  employeeHoursSignal = toSignalWithError(this.timeEntryService.getEmployeeTotalHours());

  constructor(private timeEntryService: TimeEntryService) { }
}
