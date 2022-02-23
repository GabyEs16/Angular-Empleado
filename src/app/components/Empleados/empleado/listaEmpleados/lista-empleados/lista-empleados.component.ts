import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interface/empleado.modelo';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleado: Empleado[]=[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleado = this.empleadoService.getAll();
    console.log(this.empleado);
  }

}
