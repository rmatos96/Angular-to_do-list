import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  tarefas:Array<string>=[]
  numero:number=0
  
  ngOnInit():void{
    this.recuperar()
  }

  @ViewChild('inputValor')
  ipt!: ElementRef
  
  
  add(valor:string):void{
    this.tarefas.push(valor)
    this.ipt.nativeElement.value=''
    this.numero++
    let arr=JSON.stringify(this.tarefas)
    localStorage.setItem('dado', arr)
    this.recuperar()
  }

  remover(remove:string):void{
    this.tarefas.pop()
    this.numero--
    let arr=JSON.stringify(this.tarefas)
    localStorage.setItem('dado', arr)

  }
  
  removeall():void{
    this.tarefas.splice(0, this.tarefas.length)
    localStorage.clear()
    this.numero=0
  }
  
  recuperar():void{ 
    let storage=localStorage.getItem('dado')
    let arrs=JSON.parse(storage ||'[]')
    this.tarefas=arrs
  }
}

