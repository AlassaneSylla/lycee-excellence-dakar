import { IClasse } from './../interface/IClasse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor( private httpClient: HttpClient ) { }

  createClass(classe: IClasse): any {
    return this.httpClient.post('http://localhost:3000/api/classes', classe).subscribe((result) => {
      console.log(result);
      if(result.hasOwnProperty('message')){}
    })
  }
  
}
