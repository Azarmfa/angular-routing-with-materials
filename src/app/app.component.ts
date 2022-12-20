import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'structuralLab';
  currentdate: Date = new Date();
  data: any = {
    name: 'azar',
    type: 'employee',
    location: 'chennai',
  };
  redColor: boolean = false;
  blueColor: boolean = true;
  classToggle: boolean = false;
  stylesList: any = {
    color: 'red',
    fontSize: '90px',
  };
  fromchild(e: any) {
    this.title = '-----' + e + '-----';
  }
}
