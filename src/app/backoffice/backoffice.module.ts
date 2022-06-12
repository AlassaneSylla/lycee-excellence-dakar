import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { BackofficeOfficeModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../shared/shared.module';
//import { BackOfficeModule } from './frontoffice-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    BackofficeOfficeModule,
    SharedModule
  ]
})
export class BackofficeModule { }
