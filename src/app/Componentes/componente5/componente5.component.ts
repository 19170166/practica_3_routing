import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {
  
  persona:{nombre:string,apellido:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.persona={
      nombre:this.route.snapshot.params.nombre,
      apellido:this.route.snapshot.params.apellido
    }
  }

}
