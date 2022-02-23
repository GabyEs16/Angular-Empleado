import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Empleado } from 'src/app/interface/empleado.modelo';
import { EmpleadoService } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-formulario-empleados',
  templateUrl: './formulario-empleados.component.html',
  styleUrls: ['./formulario-empleados.component.css']
})
export class FormularioEmpleadosComponent {

   //Formulario de empleado
  formulario = this.nuevoEmpleado.group({
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    RFC: '',
    Telefono: ''
  });
  empleados: Empleado[] = [];
  constructor(private nuevoEmpleado: FormBuilder, private EmpleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }
  onClickGuardar() {
    let nuevoEmpleado: Empleado = {
      Nombre: this.formulario.get('Nombre')?.value,
      ApellidoPaterno: this.formulario.get('ApellidoPaterno')?.value,
      ApellidoMaterno: this.formulario.get('ApellidoMaterno')?.value,
      RFC: this.formulario.get('RFC')?.value,
      Telefono: this.formulario.get('Telefono')?.value,
    }
    this.EmpleadoService.addEmpleados(nuevoEmpleado);
    console.log(this.empleados);
    this.limpiarFormEmpleado();
  }

  limpiarFormEmpleado() {
    this.formulario.reset();
  }
}
