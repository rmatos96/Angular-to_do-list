import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[diretiva2]'
})
export class Diretiva2Directive {

  constructor(
    private elemento:ElementRef,
  ) { 
  this.elemento.nativeElement.style.lineHeight='30px'
  this.elemento.nativeElement.style.minWidth= '50px';
  }
}
