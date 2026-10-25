
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  alumnos: Alumno[] = [];
  mensaje = '';
  error = '';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }

  listarAlumnos(): void {
    this.alumnoService.listarAlumnos().subscribe({
      next: (datos) => {
        this.alumnos = datos;
        this.error = '';
      },
      error: () => {
        this.error = 'No se pudo conectar con el servidor.';
      }
    });
  }

  eliminarAlumno(id: number): void {
    if (confirm('¿Deseas eliminar este alumno?')) {
      this.alumnoService.eliminarAlumno(id).subscribe({
        next: () => {
          this.mensaje = 'Alumno eliminado correctamente.';
          this.listarAlumnos();
        },
        error: () => {
          this.error = 'No se pudo eliminar el alumno.';
        }
      });
    }
  }
}
