import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StudentsManagementComponent } from './students-management/students-management.component';

const routes: Routes = [
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
    component: AppComponent, //page login
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
