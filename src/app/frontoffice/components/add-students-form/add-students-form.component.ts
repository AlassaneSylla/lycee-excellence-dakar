import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-students-form',
  templateUrl: './add-students-form.component.html',
  styleUrls: ['./add-students-form.component.scss']
})
export class AddStudentsFormComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  selectedValue: string | any;
  foods: Food[] = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'},
  ];

  formTitle = "Formulaire d'inscription";
  
  constructor() { }

  ngOnInit(): void {}

  

  
}
