import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StudentsManagementComponent } from './components/students-management/students-management.component';
import { FrontofficeComponent } from './frontoffice.component';


const routes: Routes = [
  {
    path: "",
    component: FrontofficeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'class-management',
        component: ClassManagementComponent,
      },
      {
        path: 'students-management',
        component: StudentsManagementComponent,
      },
      {
        path: 'registration',
        component: InscriptionComponent,
      },
      {
        path: 'root',
        component: AppComponent, 
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]

  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
