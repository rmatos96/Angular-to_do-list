import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directiva]'
})
export class DirectivaDirective {

  constructor(
    private el:ElementRef,
    
  ) {
    this.el.nativeElement.style.lineHeight='45px'
    this.el.nativeElement.style.minWidth= '50px';
    this.el.nativeElement.style.background='#8a3fd1'
    this.el.nativeElement.style.fontSize='15'
   }

}
