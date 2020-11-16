export class Timesheet {

    constructor(
      public id: number,
      public empName:string,
      public projectId:string,
      public hour : number,
      public name: string,
      public remark: string,
      public approverName: string,
      public approverId:number,
      public startDate: Date,
      public endDate:Date,
      public description?: string,
      public status?:string
    ) {  }
  
  }