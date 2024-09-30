import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { Student } from '../../models/student';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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

  participatedStudents: { studentArrayA: Student[], studentArrayB: Student[] } = {
    studentArrayA: [],
    studentArrayB: []
  };

  selectedStudentA: Student | null = null;
  selectedStudentB: Student | null = null;

  ngOnInit(): void {
    console.log(this.participatedStudents);
  }

  selectionRandom(): void {
    const randomIndexA = Math.floor(Math.random() * this.studentArrayA.length);
    const randomIndexB = Math.floor(Math.random() * this.studentArrayB.length);

    this.selectedStudentA = this.studentArrayA[randomIndexA];
    this.selectedStudentB = this.studentArrayB[randomIndexB];

    // Llamar correctamente a selectionFinish
    this.selectionFinish();
  }

  selectionFinish(): void {
    if (this.selectedStudentA) {
      this.participatedStudents.studentArrayA.push(this.selectedStudentA);
      // Eliminar al estudiante seleccionado del array original
      this.studentArrayA = this.studentArrayA.filter(student => student.id !== this.selectedStudentA?.id);
    }

    if (this.selectedStudentB) {
      this.participatedStudents.studentArrayB.push(this.selectedStudentB);
      // Eliminar al estudiante seleccionado del array original
      this.studentArrayB = this.studentArrayB.filter(student => student.id !== this.selectedStudentB?.id);
    }

    // Reiniciar selección para la siguiente iteración
    this.selectedStudentA = null;
    this.selectedStudentB = null;
  }
}
