import { RegistrationViewdetailsComponent } from './registration-viewdetails/registration-viewdetails.component';
import { RegistrationDisplayComponent } from './registration-display/registration-display.component';
import { EnquiryOEDisplayComponent } from './enquiry-oedisplay/enquiry-oedisplay.component';
import { CibilGeneratedComponent } from './cibil-generated/cibil-generated.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'enquiryDisplayOE', component:EnquiryOEDisplayComponent,
    children:[
      {
        path:'cibil-generated/:eid', component:CibilGeneratedComponent
      }
    ]
  },
  {
    path:'registerDiplay', component:RegistrationDisplayComponent,
    children:[
      {
        path:'viewAll/:customerid', component:RegistrationViewdetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationexecutiveRoutingModule { }
