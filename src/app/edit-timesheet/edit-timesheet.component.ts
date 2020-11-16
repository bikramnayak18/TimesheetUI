import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-timesheet',
  templateUrl: './edit-timesheet.component.html',
  styleUrls: ['./edit-timesheet.component.css']
})
export class EditTimesheetComponent implements OnInit {

  empId:number;
  startDate : string;
  constructor(private apiService: ApiService,route: ActivatedRoute) { 
    route.params.subscribe(params=>{
       this.empId = parseInt(params['id']);
       this.startDate = params['startDate'];
      });
  }
  models = new Array();
  myDate;
  submitted = false;
  approverNames = new Array();
  approverId = "";
  employeeName = "";
  approveMessage="";
  ngOnInit(): void {
    this.getTimesheet();
    this.getProjectMappings(4);
  }

  onSubmit(){
    var approver = {};
    for(var i=0;i<this.approverNames.length;i++){
      if(this.approverNames[i].managerName == this.approverId){
        approver = this.approverNames[i];break;
      }
    }
    this.apiService.addTimesheet(this.models,approver,this.employeeName,this.empId,this.myDate,"Submitted").subscribe((data) => {
      this.approveMessage = data["message"].toString();
      this.submitted = true;
    });
  }

  getProjectMappings(empId) {
    var i = 0;
    this.apiService.getProjectMappings({ "empId": empId }).subscribe((Items) => {
      debugger;
      this.employeeName = Items["Name"];
      this.approverNames = Items["managerInfo"];
      i++;
    });
  }

  getTimesheet() {
    
    var status = "Rejected";
    this.apiService.getTimesheet({ empId: this.empId, status: status, startDate : this.startDate })
    .subscribe((Items) => {
      console.log(Items);
      this.models  = this.createModel(Items[0]);
      this.myDate = this.getStartDate(new Date(Items[0].FromDate));
    });
  }
  getStartDate(curr){
    var firstDate = curr.getDate() - curr.getDay();
    var StartDate=Array();
    for(var i=1;i<=5;i++)
      StartDate.push(new Date(curr.setDate(firstDate+i)));

    return StartDate;
  }
  createModel(Items){
    return Items["info"];
  }

}
