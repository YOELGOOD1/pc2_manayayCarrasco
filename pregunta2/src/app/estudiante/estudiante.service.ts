import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'https://careli2021.github.io/api_examen/api/estudiante.json';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }
}