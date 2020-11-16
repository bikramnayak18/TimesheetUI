import { ApproveListComponent } from './approve-list/approve-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';
const routes: Routes = [
  { path: 'submit-timesheet', component: TimesheetComponent },
  { path: 'approve-timesheet/:id/:startDate', component: ApproveComponent },
  { path: 'approve-timesheetList', component: ApproveListComponent },
  { path: 'edit-timesheet/:id/:startDate', component: EditTimesheetComponent },
  { path: 'view-timesheet', component: ViewTimesheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
