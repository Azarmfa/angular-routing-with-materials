import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `
    <h2>App Demo2 component</h2>
    {{ saravanaTitle }}
  `,
  styles: [],
})
export class ChildComponent {
  @Input() saravanaTitle!: string;
}
