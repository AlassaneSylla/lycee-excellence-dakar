import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { StudentService } from 'src/app/shared/servicies/student.service';
import { IStudent } from 'src/app/shared/interface/IStudent';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Classes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  formTitle = 'Modifier données éléves';
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
  classes: Classes[] = [
    {value: 'Terminale S2 A', viewValue: 'Terminale S2 A'},
    {value: 'Seconde L1', viewValue: 'Seconde L1'},
    {value: 'Premiere S1', viewValue: 'Premiere S1'},
  ];

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

  editStudent() {
    this.studentService.editStudentData({_id : this.id, firstname : this.firstname, lastname : this.lastname, dateBirth : this.dateBirth, placeBirth : this.placeBirth, phone : this.phone, addressmail : this.addressmail, location : this.location, classe : this.classe, registrationDate : this.registrationDate})
    .subscribe((result : IStudent) => {
      console.log('object to modify' + result);
      if(result.hasOwnProperty('error') || this.firstname == "" || this.lastname == ''){
        console.log('modification impossible');
      } else {
        this.student = result;
        this.firstname = this.student.firstname;
        this.lastname = this.student.lastname;
        this.dateBirth = this.student.dateBirth;
        this.placeBirth = this.student.placeBirth;
        this.phone = this.student.phone;
        this.addressmail = this.student.addressmail;
        this.location = this.student.location;
        this.classe = this.student.classe;
        this.registrationDate = this.student.registrationDate;
        
        setTimeout(() => {
          this.router.navigate(['/frontoffice/students-management']);
        }, 3000);
      }
    });
  }

}
