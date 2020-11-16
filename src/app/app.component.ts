import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timesheet-ui';
  showVar: boolean = true;
  showTimesheet(){
    this.showVar = !this.showVar;
  }
}
