import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StudentsManagementComponent } from './components/students-management/students-management.component';
import { FrontofficeComponent } from './frontoffice.component';
import { FrontOfficeModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComponentsComponent,
    ClassManagementComponent,
    HomeComponent,
    InscriptionComponent,
    StudentsManagementComponent,
    FrontofficeComponent,
  ],
  imports: [
    CommonModule,
    FrontOfficeModule,
    SharedModule
  ]
})
export class FrontofficeModule { }
