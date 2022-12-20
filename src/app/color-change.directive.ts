import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.color = '#009880';
    this.elementRef.nativeElement.style.fontSize = '30px';
    this.elementRef.nativeElement.style.border = '1px solid red';
  }
}
