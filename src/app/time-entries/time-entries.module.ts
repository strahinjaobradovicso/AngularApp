import { NgModule } from "@angular/core";
import { TimeEntriesComponent } from "./components/time-entries/time-entries.component";
import { RoundHours } from "./pipes/round-hours.pipe";
import { HoursHighlight } from "./directives/hours-highlight.directive";
import { TimeEntryService } from "./services/time-entry.service";
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
        TimeEntriesComponent,
        RoundHours,
        HoursHighlight,
        TableComponent,
    ],
    imports: [],
    providers: [TimeEntryService],
    exports: [
        TimeEntriesComponent
    ]
})
export class TimeEntriesModule {

}