import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/shared/servicies/student.service';
import { IStudent } from 'src/app/shared/interface/IStudent';




@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class StudentsManagementComponent implements OnInit {
  title = 'Liste des éléves';
  id = "";
  firstname = "";
  lastname = "";
  datebirth;
  class;
  students;
  phone;

  constructor(private studentService: StudentService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() : void {
    this.studentService.getAllStudents()
      .subscribe(result => this.students = result);
  }

  deleteStudent(id: string) {
    if(confirm("Voulez vous supprimer cet eleve")) {
      this.studentService.deleteStudent(id).subscribe(result => {
        if(result.hasOwnProperty('error')){
          console.log('supprime de la liste');
        } else {
          console.log('eleve supprime: ' + result)
        }
      });
    } 
    location.reload(); 
  }
 
}
