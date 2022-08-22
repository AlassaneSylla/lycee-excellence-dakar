import { IStudent } from './../interface/IStudent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  createSudent(student: IStudent): any {
    return this.httpClient.post('http://localhost:3000/api/students', student).subscribe((result) => {
      console.log(result);
      if(result.hasOwnProperty('student done')){}
    })
  }
}
