import { Component, OnInit } from '@angular/core';
import { AddStudentsFormComponent } from '../add-students-form/add-students-form.component';


@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class StudentsManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  title = "Liste des étudiants ";
  stFirstname = "";
  stLastname = "";
  stAddressMail = "";
  stPhone:any;
  stLocation:string = "";
  registrationDate = new Date();
  
  students = [
    {id:23, firstname: 'Alassane', lastname: "Sylla", addressMail: "email@exemple.com", phone:771234567, location: "HLM 5 Dakar"},
    {id:12, firstname: 'Modou', lastname: "Diop", addressMail: "email@exemple.com", phone:771234567, location: "HLM 5 Dakar"},
    {id:9, firstname: 'Aminata', lastname: "Ndiaye", addressMail: "email@exemple.com", phone:771234567, location: "HLM 5 Dakar"}
  ];

  deleteStudent(stId: number) {
    const stIndex = this.students.findIndex((st) => st.id === stId);
    this.students.splice(stIndex, 1);
  } 

  

  
  
     
}
