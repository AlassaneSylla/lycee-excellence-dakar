import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/components/page404/page404.component';


const routes: Routes = [

  {
    path: "frontoffice",
    loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)
  },
  {
    path: "backoffice",
    loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {
    path: "",   
    redirectTo: "frontoffice",
    pathMatch: "full"
  },
  {
    path: "*",  
    component: Page404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
