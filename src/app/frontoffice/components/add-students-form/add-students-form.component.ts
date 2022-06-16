import { Component, OnInit } from '@angular/core';

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

  submit(login:any){
    console.log('form submited', login);
  }

}
