import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  { path: '', component: EstudiantesComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: '**', redirectTo: '' }
];