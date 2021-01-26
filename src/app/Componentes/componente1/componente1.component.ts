import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  pers={
    nombre: "angel",
    apellido:"zapata"
  };
  constructor() { }
  ngOnInit(): void {
    
  }

}
