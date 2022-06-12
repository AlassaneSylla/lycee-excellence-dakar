import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { BackofficeComponent } from './backoffice.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    path: "",
    component: BackofficeComponent,
    children: [
      
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      }
    ]

  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
