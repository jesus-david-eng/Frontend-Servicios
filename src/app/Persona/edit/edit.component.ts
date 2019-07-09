import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/Modelo/Clientes';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente :Clientes = new Clientes();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let _id =localStorage.getItem("_id");
    this.service.getClientById(_id)
    .subscribe(data=>{
      this.cliente=data;

    })
  }

  actualizar(cliente:Clientes){
    this.service.updateClient(cliente)
      .subscribe(data =>{
         alert("se actualizo")
         this.router.navigate(["listar"]);
          this.cliente=data;
        
      }
        )
    }
  }

