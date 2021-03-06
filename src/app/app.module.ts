import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import {ServiceService} from '../app/Service/service.service'
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VistasComponent } from './vistas/vistas.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    VistasComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
