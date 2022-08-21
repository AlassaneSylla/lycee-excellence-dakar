import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClasseService } from 'src/app/shared/servicies/classe.service';
import {FormControl, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  wording: string;
  position: number;
  size: number;
  date: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, wording: 'Sixieme A', size: 36, date: 'dateins'},
  {position: 2, wording: 'Cinquieme C', size: 40, date: '...'},
  {position: 3, wording: 'Quatrieme B', size: 29, date: '...'},
  {position: 4, wording: 'Troisieme E', size: 31, date: '...'},
  {position: 5, wording: 'Seconde L', size: 25, date: '..'},
  {position: 6, wording: 'Premiere S', size: 23, date: '...'},
  {position: 7, wording: 'Terminale S1 A', size: 22, date: '...'},
  
];

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.scss']
})
export class ClassManagementComponent implements OnInit {
    libFormControl = new FormControl('', [Validators.required]);
    effFormControl = new FormControl('', [Validators.required]);

    form = new FormGroup({
      wording : new FormControl(''),
      size : new FormControl('')
    });
    

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
  }

  title = "Liste des classes";
  titleForm = 'Ajouter nouvelle classe';
  date = () =>  Date.now();

  classWording = "";
  classSize= 0;
 
 classes = [
   { wording: "Second S", size: 31, id: 1},
   { wording: "Premiere S1", size: 22, id: 5},
   { wording: "Premiere L", size: 40, id: 9},
   { wording: "Seconde L", size: 34, id: 12},
   { wording: "Terminal L2b", size: 38, id: 2},
   { wording: "Terminal S1", size: 15, id: 42},
   { wording: "Terminal S2", size: 34, id: 28},
   { wording: "Terminal L1a", size: 44, id: 18}
 ];

 deleteClass(clId: number) {
   const clIndex = this.classes.findIndex((cl) => cl.id === clId);
   this.classes.splice(clIndex, 1);
 } 

 addClass() {
  let data = this.form.value;
  console.log(data);
  let classe = { 
    size: data.size, 
    wording: data.wording, 
    date : Date.now()
  }
  this.classeService.createClass(classe);
  data.wording = "";
  
  /* if (this.classWording == "") {
   console.log(this.messageError); 
  }
  else {
  const lastIndex = this.classes.length - 1;  
  const id = this.classes[lastIndex].id + 1;
  this.classes.unshift({wording: this.classWording, size: this.classSize, id});
  }
  this.classWording = "";  */  
 }

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
 dataSource = ELEMENT_DATA;

}
