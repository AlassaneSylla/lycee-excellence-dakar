import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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

  firstnameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  dateBirthFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  placeBirthFormControl = new FormControl('', [Validators.required]);
  locatorFormControl = new FormControl('', [Validators.required]);
  classFormControl = new FormControl('', [Validators.required]);
  registerDateFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  form = new FormGroup({
    email : new FormControl(''),
    firstname : new FormControl(''),
    lastname: new FormControl(''),
    dateBirth: new FormControl(''),
    phone: new FormControl(''),
    placebirth: new FormControl(''),
    locator: new FormControl(''),
    classe: new FormControl(''),
    registerDate: new FormControl(''),
  });

  selectedValue: string | any;
  foods: Food[] = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'},
  ];

  formTitle = "Formulaire d'inscription";
  
  constructor() { }

  ngOnInit(): void {}

  registerStudent() {

  }

  

  
}
