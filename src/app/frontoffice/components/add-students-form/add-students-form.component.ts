import { Component, Input, OnInit } from '@angular/core';
import { StudentsManagementComponent } from '../students-management/students-management.component';

@Component({
  selector: 'app-add-students-form',
  templateUrl: './add-students-form.component.html',
  styleUrls: ['./add-students-form.component.scss']
})
export class AddStudentsFormComponent implements OnInit {

  formTitle = "Formulaire inscription";
  constructor() { }

  ngOnInit(): void {
  }

  /*listStudents: 
  @Input()*/

 /* registration() {
    var lastIndex = this.students.length - 1;  
    var id = this.students[lastIndex].id + 1;
    lastIndex++;
    this.students.unshift({
      firstname: this.stFirstname,
      lastname: this.stLastname,
      addressMail: this.stAddressMail,
      phone: this.stPhone,
      location: this.stLocation,
      id
    });
    this.stFirstname = "";
    this.stLastname = "";
    this.stAddressMail = "";
    this.stPhone = "";
    this.stLocation = "";
} */

  
}
