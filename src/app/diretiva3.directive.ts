import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[diretiva3]'
})
export class Diretiva3Directive {

  constructor(
    private elemento3:ElementRef
  ) {
    this.elemento3.nativeElement.style.lineHeight='30px'
    this.elemento3.nativeElement.style.minWidth= '50px';
    this.elemento3.nativeElement.style.background='#8a3fd1'
   }
}
