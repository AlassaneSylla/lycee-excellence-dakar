import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StudentService } from 'src/app/shared/servicies/student.service';

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
  formTitle = "Formulaire d'inscription";
  date = Date.now();

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
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    dateBirth: new FormControl(''),
    placeBirth: new FormControl(''),
    phone: new FormControl(''),
    addressmail : new FormControl(''),
    location: new FormControl(''),
    classe: new FormControl(''),
    registrationDate: new FormControl(''),
  });

  selectedValue: string | any;
  foods: Food[] = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'},
  ];
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {}

  registerStudent() {
    let data = this.form.value;
    console.log(data);
    let student = { 
      firstname: data.firstname,
      lastname: data.lastname,
      dateBirth: data.dateBirth,
      placeBirth: data.placeBirth,
      location: data.location,
      phone: data.phone,
      addressmail: data.addressmail,
      registrationDate: data.registrationDate,
      classe: data.classe   
    }
    this.studentService.createStudent(student);
  }

  completeRegister() {
    this.form.reset();
    //window.location.reload();
  }
 
}
