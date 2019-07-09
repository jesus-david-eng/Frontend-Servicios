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
   this.ObtenerClientes();
  }

  ObtenerClientes(){
    this.service.getClients()
    .subscribe(data=>{
       this.clientes=data;
    
    })
  }

  deleteClient(cliente: Clientes) {
    window.location.reload();
    this.service.deleteClient(cliente.idClient)
      .subscribe(
        data => {
        console.log(data);                  
})

//this.ObtenerClientes(); 
 }

  editar(cliente:Clientes):void{
    localStorage.setItem("_id",cliente.idClient.toString());
    this.router.navigate(["edit"]);
  }

  

  
 
}
