import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/shared/interface/IStudent';
import { StudentService } from 'src/app/shared/servicies/student.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  title = 'informations éléve';
  id = '';
  firstname = "";
  lastname = '';
  dateBirth;
  phone;
  addressmail = '';
  placeBirth = '';
  location = '';
  classe = '';
  registrationDate;
  student: IStudent;

  constructor(private studentService : StudentService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('id');

    this.studentService.getOneStudent(this.id).subscribe((result : IStudent) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('student not found');
      } 
      else {
        this.student = result;
        this.firstname = this.student.firstname;
        this.lastname = this.student.lastname;
        this.dateBirth = this.student.dateBirth;
        this.phone = this.student.phone;
        this.addressmail = this.student.addressmail;
        this.placeBirth = this.student.placeBirth;
        this.location = this.student.location;
        this.classe = this.student.classe;
        this.registrationDate = this.student.registrationDate
      }
      return result;
    });
  }

  getOneStudent() {
    this.studentService.getOneStudent(this.id).subscribe((result : IStudent) => {
      console.log(result);
      if(result.hasOwnProperty('error')){
        console.log('student not found');
      } else {
        this.student = result;
      }
    });
  }

}
