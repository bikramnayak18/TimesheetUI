import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
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
  approveMessage="";
  ngOnInit(): void {
    this.getTimesheet()
  }

  UpdateTimesheet(status){
    var approverID = "3";
    this.apiService.updateTimesheet({ empId: this.empId, approverId: approverID, status: status, startDate : this.startDate })
    .subscribe((Items) => {
      this.approveMessage = "Timesheet "+status;
      this.submitted = true;
    });
  }
  getTimesheet() {
    debugger;
    var approverID = "3";
    var status = "Submitted";
    this.apiService.getTimesheet({ empId: this.empId, approverId: approverID, status: status, startDate : this.startDate })
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
