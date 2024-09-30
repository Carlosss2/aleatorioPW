import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  studentArrayA: Student[] = [
    { name: "Abarca", id: 1 },
    { name: "Melissa", id: 2 },
    { name: "Sujey", id: 3 },
    { name: "Bryan", id: 4 },
    { name: "Milton", id: 5 },
    { name: "Fabricio", id: 6 },
    { name: "Ameth", id: 7 },
    { name: "Manuel de Jesus", id: 8 },
    { name: "Hector", id: 9 },
    { name: "Gael", id: 10 },
    { name: "Lyz", id: 11 },
    { name: "Luis", id: 12 },
    { name: "Sayuri", id: 13 },
    { name: "Hannia", id: 14 }
  ];

  studentArrayB: Student[] = [
    { name: "Jose", id: 1 },
    { name: "Christopher", id: 2 },
    { name: "Angel", id: 3 },
    { name: "Maximiliano", id: 4 },
    { name: "Eduardo", id: 5 },
    { name: "Fredy", id: 6 },
    { name: "Yara", id: 7 },
    { name: "Bruno", id: 8 },
    { name: "Joaquin", id: 9 },
    { name: "Antonio", id: 10 },
    { name: "Osvaldo", id: 11 },
    { name: "Marcos", id: 12 },
    { name: "Ulises", id: 13 }
  ];

  selectedStudentA: Student | null = null;
  selectedStudentB: Student | null = null;
  eliminatedStudents: { team: string; student: Student }[] = [];

  ngOnInit(): void {}

  seleccionarAlumno() {
    // Seleccionar un índice aleatorio para el equipo A
    const randomIndexA = Math.floor(Math.random() * this.studentArrayA.length);
    this.selectedStudentA = this.studentArrayA[randomIndexA];

    // Seleccionar un índice aleatorio para el equipo B
    const randomIndexB = Math.floor(Math.random() * this.studentArrayB.length);
    this.selectedStudentB = this.studentArrayB[randomIndexB];

    // Eliminar los estudiantes seleccionados de los arreglos
    this.studentArrayA.splice(randomIndexA, 1);
    this.studentArrayB.splice(randomIndexB, 1);

    // Agregar los seleccionados a la lista de eliminados
    this.eliminados();
  }

  eliminados() {
    // Si la lista de eliminados no ha sido inicializada, inicialízala
    if (!this.eliminatedStudents) {
        this.eliminatedStudents = [];
    }
  
    // Agregar los estudiantes seleccionados a la lista de eliminados
    if (this.selectedStudentA) {
        this.eliminatedStudents.push({ team: 'Equipo A', student: this.selectedStudentA });
    }
  
    if (this.selectedStudentB) {
        this.eliminatedStudents.push({ team: 'Equipo B', student: this.selectedStudentB });
    }
  }
}
