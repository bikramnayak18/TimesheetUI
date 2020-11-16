import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-timesheet',
  templateUrl: './view-timesheet.component.html',
  styleUrls: ['./view-timesheet.component.css']
})
export class ViewTimesheetComponent implements OnInit {
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPendingApproval("4");
  }
  models = new Array();
  getPendingApproval(empId){
    this.apiService.getEmployeeTimesheet({empId: empId}).subscribe((Items) => {
      this.models  = this.createModel(Items);
    });
  }

  createModel(Items){
    var length = Items.length;
    var output=new Array();
    for(var i =0;i<length;i++){
      output.push({"FromDate":Items[i]["FromDate"],"ToDate":Items[i]["ToDate"],"Status":Items[i]["Status"],"EmpId":Items[i]["EmpId"]})
    }
    return output;
  }

  
}
