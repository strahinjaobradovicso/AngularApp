import { NgModule } from "@angular/core";
import { TimeEntriesComponent } from "./components/time-entries/time-entries.component";
import { RoundHours } from "./pipes/round-hours.pipe";
import { HoursHighlight } from "./directives/hours-highlight.directive";
import { TimeEntryService } from "./services/time-entry.service";
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from "./components/chart/chart.component";
import { ChartModule } from "angular-highcharts";

@NgModule({
    declarations: [
        TimeEntriesComponent,
        RoundHours,
        HoursHighlight,
        TableComponent,
        ChartComponent
    ],
    imports: [ChartModule],
    providers: [TimeEntryService],
    exports: [
        TimeEntriesComponent
    ]
})
export class TimeEntriesModule {

}