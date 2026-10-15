import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Estudiante } from '../estudiante/estudiante';
import { EstudianteService } from '../estudiante/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(
    private estudianteService: EstudianteService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe({
      next: (data: Estudiante[]) => {
        this.estudiantes = data;
      },
      error: (err: any) => {
        console.error('Error al cargar los estudiantes:', err);
      }
    });
  }

  verDetalle(estudiante: Estudiante): void {
    const suma = Number(estudiante.nota1) + Number(estudiante.nota2) + Number(estudiante.nota3);
    const promedio = suma / 3;
    
    const estado = promedio >= 13 ? 'Aprobado' : 'Desaprobado';
    
    let observacion = '';
    if (promedio >= 17) {
      observacion = 'Excelente';
    } else if (promedio >= 13) {
      observacion = 'Regular';
    } else {
      observacion = 'En riesgo';
    }

    this.router.navigate(['/detalle'], {
      queryParams: {
        id: estudiante.id,
        nombre: estudiante.nombre,
        nota1: estudiante.nota1,
        nota2: estudiante.nota2,
        nota3: estudiante.nota3,
        suma: suma,
        promedio: promedio.toFixed(2),
        estado: estado,
        observacion: observacion
      }
    });
  }
}