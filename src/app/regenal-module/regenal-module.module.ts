import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegenalModuleRoutingModule } from './regenal-module-routing.module';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CibilStatusComponent } from './cibil-status/cibil-status.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';

@NgModule({
  declarations: [
    EnquiryListComponent,
    EnquiryComponent,
    DashBoardComponent,
    RegistrationComponent,
    CibilStatusComponent,
    DocumentuploadComponent,
   
  ],
  imports: [
    CommonModule,
    RegenalModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class RegenalModuleModule { }
