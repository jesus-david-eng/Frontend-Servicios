import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Clientes } from 'src/app/Modelo/Clientes';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public clientName;
  public productOwner;
  
  constructor(private router:Router, private service:ServiceService ) { }

  ngOnInit() {
  }

  public enviar(){
    const cliente = {
      "clientName": this.clientName,
      "productOwner": this.productOwner
    };

  
    this.service.save(cliente)
     .subscribe(response =>{
       console.log(response)
     })
  }

}
