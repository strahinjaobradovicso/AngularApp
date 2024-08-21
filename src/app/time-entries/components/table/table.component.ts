import { Component, input } from '@angular/core';
import { EmployeeHours } from '../../types/employee-hours.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  employeeHours = input.required<EmployeeHours[]>();
}
