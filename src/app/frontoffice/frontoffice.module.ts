import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsManagementComponent } from './components/students-management/students-management.component';
import { FrontofficeComponent } from './frontoffice.component';
import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddStudentsFormComponent } from './components/add-students-form/add-students-form.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ClassManagementComponent,
    HomeComponent,
    StudentsManagementComponent,
    FrontofficeComponent,
    AddStudentsFormComponent,
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
  ]
})
export class FrontofficeModule { }
