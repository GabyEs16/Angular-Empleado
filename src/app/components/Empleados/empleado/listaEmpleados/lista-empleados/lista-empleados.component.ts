import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interface/empleado.modelo';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[]=[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.getAll();
    console.log(this.empleados);
  }

}
