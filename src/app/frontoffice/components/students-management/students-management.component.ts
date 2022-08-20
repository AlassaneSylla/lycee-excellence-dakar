import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddStudentsFormComponent } from '../add-students-form/add-students-form.component';


export interface PeriodicElement {
  position: number;
  firstname: string;
  lastname: string;
  date_naiss: number;
  mail: string;
  phone: number;
  address: string;
  //registration_date: string 
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstname: 'Alassane', mail: 'alou@gmail.com', date_naiss: Date.now(), phone: 774297425, lastname: 'Sylla', address: 'Ouagou Niayes'},
  {position: 2, firstname: 'Awa', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Diagne', address: 'HLM'},
  {position: 3, firstname: 'Assane', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Diop', address: 'Ouagou Niayes'},
  {position: 4, firstname: 'Abdou', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Seye', address: 'Grand-dakar'},
  {position: 5, firstname: 'Roland', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Faye', address: 'Yoff'},
  {position: 6, firstname: 'Omar', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Kebe', address: 'Ouagou Niayes'},
  {position: 7, firstname: 'Vieux', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Ngome', address: 'Ouakam'},
  {position: 8, firstname: 'Aicha', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Kamara', address: 'Pikine'},
  {position: 9, firstname: 'Louisa', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Correa', address: 'Guediaway'},
  {position: 10, firstname: 'Fatou', mail: 'alou@gmail.com', date_naiss: Date.now() , phone: 774297425, lastname: 'Sakho', address: 'keur massar'},
];


@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class StudentsManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  title = "Liste des étudiants ";
  /*stFirstname = "";
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
  } */

  @ViewChild('paginator') paginator: MatPaginator | any

  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'date_naiss', 'mail', 'phone', 'address'];
  dataSource: MatTableDataSource<PeriodicElement> | any;
  
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  } 
  
}
