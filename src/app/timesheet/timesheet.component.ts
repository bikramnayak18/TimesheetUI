import { Timesheet } from './../timesheet';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  models = new Array();
  approverNames = new Array();
  approverId = "";
  employeeName = "";
  projectIds = ["1", "2", "3"];
  empId = 4;
  approveMessage="";
  ngOnInit(): void {
    this.getProjectMappings(this.empId);
  }
  myDate  = this.getStartDate();
  submitted = false;
  approveTimesheet = false;
  onSubmit() {
    var approver = {};
    for(var i=0;i<this.approverNames.length;i++){
      if(this.approverNames[i].managerName == this.approverId){
        approver = this.approverNames[i];break;
      }
    }
    this.apiService.addTimesheet(this.models,approver,this.employeeName,this.empId,this.myDate,"Submitted").subscribe((data) => {
      this.approveMessage = data["message"].toString();
      this.submitted = true;
      this.approveTimesheet = false;
    });
  }

  getStartDate(){
    var curr = new Date; // get current date
    var firstDate = curr.getDate() - curr.getDay();
    var StartDate=Array();
    for(var i=1;i<=5;i++){
      var temp = new Date(curr.setDate(firstDate+i));
      StartDate.push(temp.toISOString().slice(0,10));
    }
    return StartDate;
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.models[0]); }
  getProjectMappings(empId) {
    var i = 0;
    this.apiService.getProjectMappings({ "empId": empId }).subscribe((Items) => {
      debugger;
      this.models = Items["info"];
      this.employeeName = Items["Name"];
      this.approverNames = Items["managerInfo"];
      this.approveTimesheet = false;
      i++;
    });
  }
  addRow() {
    var t = new Timesheet(18, "test employee", this.projectIds[0], 8, 'test', '', this.approverNames[0], 1, new Date(), new Date(), '');
    this.models.push(t);
  }

  newTimesheet() {
    this.models = []
    this.models.push(new Timesheet(42, "test employee", '', 8, '', '', '', 1, new Date(), new Date()));
  }

  
}
