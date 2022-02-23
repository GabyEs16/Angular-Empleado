import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/Empleados/empleado/empleado.component';
import { FormularioEmpleadosComponent } from './components/Empleados/empleado/formularioEmpleados/formulario-empleados/formulario-empleados.component';
import { ListaEmpleadosComponent } from './components/Empleados/empleado/listaEmpleados/lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    FormularioEmpleadosComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
