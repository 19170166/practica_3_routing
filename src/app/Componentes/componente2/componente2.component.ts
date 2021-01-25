import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {Lista} from '../../Clases/lista';
import {Clase1} from '../../Clases/clase1';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  @Output() newItemEmitter = new EventEmitter<String>();
  lista = Lista;
  persona: Clase1;

  sendPerson(value:String){
    this.newItemEmitter.emit(value);
  }

  onSelect(per:Clase1):void{
    this.persona = per;
  }
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {

  }

}
