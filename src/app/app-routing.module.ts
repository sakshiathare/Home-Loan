import { CreditmanagerModule } from './creditmanager/creditmanager.module';
import { CMDashBoardComponent } from './creditmanager/cmdash-board/cmdash-board.component';
import { DashBoardeOEComponent } from './operationexecutive/dash-boarde-oe/dash-boarde-oe.component';

import { HomeComponent } from './login/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashBoardComponent } from './regenal-module/dash-board/dash-board.component';
import { Enquiryroutes } from './regenal-module/regenal-module-routing.module';
import { AboutComponent } from './about/about.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ProcesstoapplyComponent } from './processtoapply/processtoapply.component';
import { EmiComponent } from './emi/emi.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  
  {
    path:'wwo', component:WhatweofferComponent
  },
  {
    path:'enquiry', component:ProcesstoapplyComponent
  },
  {
    path:'faq', component:FaqComponent
  },
  {
    path:'emi', component:EmiComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboardEnquiry',component:DashBoardComponent,// reginoal modul routing
    loadChildren:()=>import("src/app/regenal-module/regenal-module.module").then(module=>module.RegenalModuleModule)
  },
  {
    path:'dashboardOE', component:DashBoardeOEComponent, // operation executive routing
    loadChildren:()=>import("src/app/operationexecutive/operationexecutive.module").then(module=>module.OperationexecutiveModule)
  },
  {
    path:"CMdashBoard", component:CMDashBoardComponent, // creadit manager routing
    loadChildren:()=>import("src/app/creditmanager/creditmanager.module").then(module=>module.CreditmanagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
