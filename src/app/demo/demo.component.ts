import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <h2>This is demo component</h2>
    <input type="text" [(ngModel)]="val" />
    <button (click)="clickme()">click me</button>
  `,
  styles: [],
})
export class DemoComponent {
  // @Input('demotitle') title!: string;
  //<app-demo2 [saravanaTitle]="saravanaTitle"></app-demo2>
  // @Input() demotitle!: string;
  val: any;
  @Output() demoEvent: EventEmitter<any> = new EventEmitter();

  clickme() {
    console.log('child clicked');
    this.demoEvent.emit(this.val);
  }
}
