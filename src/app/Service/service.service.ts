import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Clientes} from '../Modelo/Clientes'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/api'
  

  getPersonas():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.Url)
  }

  save(cliente){
    return this.http.post(this.Url + "/guardar" , cliente)
  }

  getPersonaId(id:String){
    return this.http.get<Clientes>(this.Url+"/"+id)
  }
  updatePersona(cliente:Clientes){
    return this.http.put<Clientes>(this.Url+ "/actualizar"+cliente.idClient,cliente);
  }
  deletePersona(cliente:Clientes){
    return this.http.delete<Clientes>(this.Url+"/delete/"+cliente.idClient)
  }
  
}
