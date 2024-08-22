import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';


@Component({
  selector: 'app-root',
  standalone: true, // para usar como micro-modulo
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  listaTareas: string[] = [];
  nuevaTarea: string = '' 

  private _tareasServices = inject(TareasService);

  ngOnInit():void{
    this.listaTareas = this._tareasServices.getTareas();
  }

  agregarTarea(){
    this._tareasServices.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = ''; // estado inicial
    this.listaTareas = this._tareasServices.getTareas(); // actualiza lista
  }

  eliminarTarea(i:number){
    this._tareasServices.eliminarTarea(i);
    this.listaTareas = this._tareasServices.getTareas();
  }
}
