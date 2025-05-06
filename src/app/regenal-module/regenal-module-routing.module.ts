import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { CibilStatusComponent } from './cibil-status/cibil-status.component';
import { RegistrationComponent } from './registration/registration.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';

export const Enquiryroutes: Routes = [
  {
    path:'enquiry', component:EnquiryComponent
  },
  {
    path:'enquiry-list', component:EnquiryListComponent,
    children:[
      {
        path:'documentUpload/:eid', component:DocumentuploadComponent
      },
      {
        path:'registration',component:RegistrationComponent,
      },
    ]
  },
  {
    path:'cibil-status',component:CibilStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Enquiryroutes)],
  exports: [RouterModule]
})
export class RegenalModuleRoutingModule { }
