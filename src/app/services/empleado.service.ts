import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interface/empleado.modelo';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleados: Empleado[] =[]

  constructor(private http:HttpClient) {  }

  //Metodo para recibir la lista de empleados
  getAll(){
    return this.empleados;
  }

  //Metodo para registrar un empleado
  addEmpleados(empleado:Empleado){
    this.empleados.push(empleado);
    console.log(this.empleados)
  }
  
  //Metodo para subir una foto
  subirFotoEmpleado(files: any) {
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
  }
}
