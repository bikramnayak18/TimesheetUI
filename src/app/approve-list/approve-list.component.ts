import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-approve-list',
  templateUrl: './approve-list.component.html',
  styleUrls: ['./approve-list.component.css']
})
export class ApproveListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPendingApproval("3");
  }
  models = new Array();
  getPendingApproval(approverId){
    var status = "Submitted";
    this.apiService.getPendingApproval({approverId: approverId, status: status }).subscribe((Items) => {
      console.log(Items);
      this.models  = this.createModel(Items);
    });
  }

  createModel(Items){
    var length = Items.length;
    var output=new Array();
    for(var i =0;i<length;i++){
      output.push({"FromDate":Items[i]["FromDate"],"ToDate":Items[i]["ToDate"],"EmpName":Items[i]["EmpName"],"EmpId":Items[i]["EmpId"]})
    }
    return output;
  }
}
