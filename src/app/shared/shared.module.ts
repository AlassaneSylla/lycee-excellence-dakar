import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    //BrowserModule,
    FormsModule,
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
