import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    Page404Component,
  ],
  exports: [
    Page404Component,
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
