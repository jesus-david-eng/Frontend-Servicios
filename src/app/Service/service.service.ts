import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; //libreria Http
import {Clientes} from '../Modelo/Clientes' //Modelo clientes
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/api'
  

  getPersonas():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.Url) //obtener todos los clientes de http://localhost:8080/api
  }

  save(cliente){
    return this.http.post(this.Url + "/guardar" , cliente)
  }

  getPersonaId(id:String){
    return this.http.get<Clientes>(this.Url+"/search/"+id)
  }
  
  deleteClient(_id:String){
    return this.http.delete(this.Url+"/delete/"+_id)
  }
  
  ActualizarCliente(cliente){
     return this.http.put<Clientes>(this.Url+'/'+cliente.idClient,cliente)
  }
  
}
