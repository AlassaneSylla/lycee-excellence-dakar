import { IClasse } from './../interface/IClasse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor( private httpClient: HttpClient ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createClass(classe: IClasse): any {
    return this.httpClient.post('http://localhost:3000/api/classes', classe).subscribe((result) => {
      console.log(result);
      if(result.hasOwnProperty('classe done')){}
    })
  }

  getOneClass(_id : any) : Observable<IClasse>{
    return this.httpClient.get<IClasse>(`http://localhost:3000/api/classes/${_id}`)
    .pipe(
      tap(_ => console.log('affiche une classe')),
      catchError(this.handleError<IClasse>('getOneClass'))
    );  
  }

  getAllClasses() : Observable<IClasse[]>{
    return this.httpClient.get<IClasse[]>('http://localhost:3000/api/classes')
      .pipe(
        tap(_ => console.log('liste des classes')),
        catchError(this.handleError<IClasse[]>('getAllClasses'))
      );
  }

  modifyClass(classe : IClasse) : Observable<any>{
    return this.httpClient.put(`http://localhost:3000/api/classes/${classe._id}`, classe, this.httpOptions)
    .pipe(
      tap(_ => console.log(`modifier la classe id=${classe._id}`)),
      catchError(this.handleError<any>('modifyClass'))
    );
  }

  deleteClass(_id : any) : Observable<IClasse>{
    return this.httpClient.delete<IClasse>(`http://localhost:3000/api/classes/${_id}`, this.httpOptions)
    .pipe(
      tap(_ => console.log(`supprmer la classe: id=${_id}`)),
      catchError(this.handleError<IClasse>('deleteClass'))
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
