import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBolorColor]',
})
export class BolorColorDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('newClass');
  }
}
