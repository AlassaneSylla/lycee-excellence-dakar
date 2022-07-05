import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.scss']
})
export class ClassManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Liste des classes";
  classWording = "";
  classSize= 0;
  messageError = "error";
  date = () =>  Date.now();

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
  if (this.classWording == "") {
   console.log(this.messageError); 
  }
  else {
  const lastIndex = this.classes.length - 1;  
  const id = this.classes[lastIndex].id + 1;
  this.classes.unshift({wording: this.classWording, size: this.classSize, id});
  }
  this.classWording = ""; 
   
 }

}
