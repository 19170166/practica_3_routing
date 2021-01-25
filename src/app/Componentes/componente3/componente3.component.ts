import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  par:string
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.par = this.route.snapshot.paramMap.get('nombre');    
  }

}
