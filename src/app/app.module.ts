import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproveComponent } from './approve/approve.component';
import { ApproveListComponent } from './approve-list/approve-list.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';  
@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    HeroFormComponent,
    ApproveComponent,
    ApproveListComponent,
    ViewTimesheetComponent,
    EditTimesheetComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
