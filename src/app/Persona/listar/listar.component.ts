import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../../Service/service.service';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Modelo/Clientes';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Clientes[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
       this.clientes=data;
    })
  }
  Editar(cliente: Clientes):void{
    localStorage.setItem("id",cliente.idClient.toString());
  }

}
