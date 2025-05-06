import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationexecutiveRoutingModule } from './operationexecutive-routing.module';
import { DashBoardeOEComponent } from './dash-boarde-oe/dash-boarde-oe.component';
import { CibilGeneratedComponent } from './cibil-generated/cibil-generated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EnquiryOEDisplayComponent } from './enquiry-oedisplay/enquiry-oedisplay.component';
import { RegistrationDisplayComponent } from './registration-display/registration-display.component';
import { RegistrationViewdetailsComponent } from './registration-viewdetails/registration-viewdetails.component';


@NgModule({
  declarations: [
    DashBoardeOEComponent,
    CibilGeneratedComponent,
    EnquiryOEDisplayComponent,
    RegistrationDisplayComponent,
    RegistrationViewdetailsComponent
  ],
  imports: [
    CommonModule,
    OperationexecutiveRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class OperationexecutiveModule { }
