import { DisplayListComponent } from './display-list/display-list.component';
import { SanctionlaterComponent } from './sanctionlater/sanctionlater.component';
import { DocumentverificationComponent } from './documentverification/documentverification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'docList', component:DisplayListComponent,
    children:
    [
      {
        path:'documentverification/:documentid',component:DocumentverificationComponent,
        children:
        [
          {
             path:'sanctionletter/:customerid', component:SanctionlaterComponent
          }
        ]
      }
    ]
  },
  {
    path:'documentverification',component:DocumentverificationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
