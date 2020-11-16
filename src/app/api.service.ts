import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({ 
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'http://localhost:5000/api';
  constructor(private httpClient: HttpClient) { }
  public addTimesheet(data,approver,employeeName,empId,dates,status){
    var json = {data:data,approver:approver,status:status,dates:dates,employee :{employeeName : employeeName, empId:empId}};
    return this.httpClient.post(`${this.API_KEY}/timesheet/addTimesheet`,json);
  }

  public getTimesheet(data){
    var json ={id:data.id,status:data.status,approverId:data.approverId};
    return this.httpClient.request('POST',`${this.API_KEY}/timesheet/getTimesheet`,{responseType:'json'
    ,body: data});
  }
  public updateTimesheet(data){
    return this.httpClient.request('POST',`${this.API_KEY}/timesheet/updateTimesheet`,{responseType:'json'
    ,body: data});
  }
  public getEmployeeTimesheet(data){
    return this.httpClient.request('POST',`${this.API_KEY}/timesheet/getEmployeeTimesheet`,{responseType:'json'
    ,body: data});
  }
  public getPendingApproval(data){
    return this.httpClient.request('POST',`${this.API_KEY}/timesheet/getPendingApproval`,{responseType:'json'
    ,body: data});
  }
  public getProjectMappings(data){
    var json ={empId:data.empId};
    return this.httpClient.request('POST',`${this.API_KEY}/timesheet/getProjectMappings`,{responseType:'json'
    ,body: json});
  }
}
