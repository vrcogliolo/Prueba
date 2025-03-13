import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { TareasComponent } from '../pages/tareas/tareas.component';
import { TableroComponent } from '../pages/tablero/tablero.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tablero', component: TableroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
