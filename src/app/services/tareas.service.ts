import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStoragKey = 'listaTareas'

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStoragKey) as string ) || [];
  }

  agregarTarea(tarea: string){
    const tareas = this.getTareas(); // traigo las tareas
    tareas.push(tarea);
    localStorage.setItem(this.localStoragKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number){
    const tareas = this.getTareas();
    tareas.splice(index, 1) // sacamos del array la que indica el indice
    localStorage.setItem(this.localStoragKey, JSON.stringify(tareas))
  }
}
