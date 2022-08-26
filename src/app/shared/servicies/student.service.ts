import { IStudent } from './../interface/IStudent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  createStudent(student: IStudent): any {
    return this.httpClient.post('http://localhost:3000/api/students', student).subscribe((result) => {
      console.log(result);
      if(result.hasOwnProperty('createStudent')){}
    })
  }

  getOneStudent(_id : any) : Observable<IStudent>{
    return this.httpClient.get<IStudent>(`http://localhost:3000/api/students/${_id}`)
    .pipe(
      tap(_ => console.log('affiche un etudiant')),
      catchError(this.handleError<IStudent>('getOneStudent'))
    );  
  }

  getAllStudents() : Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>('http://localhost:3000/api/students')
    .pipe(
      tap(_ => console.log('list of students')),
      catchError(this.handleError<IStudent[]>('getAllStudents'))
    );
  }

  editStudentData(student : IStudent) : Observable<any>{
    return this.httpClient.put(`http://localhost:3000/api/students/${student._id}`, student, this.httpOptions)
    .pipe(
      tap(_ => console.log(`modify student data id=${student._id}`)),
      catchError(this.handleError<any>('editStudentData'))
    );
  }

  deleteStudent(_id : any) : Observable<IStudent>{
    return this.httpClient.delete<IStudent>(`http://localhost:3000/api/students/${_id}`, this.httpOptions)
    .pipe(
      tap(_ => console.log(`delete student: id=${_id}`)),
      catchError(this.handleError<IStudent>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T); 
    };
  }
}
