import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { DocumentverificationComponent } from './documentverification/documentverification.component';
import { SanctionlaterComponent } from './sanctionlater/sanctionlater.component';
import { CMDashBoardComponent } from './cmdash-board/cmdash-board.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayListComponent } from './display-list/display-list.component';


@NgModule({
  declarations: [
    DocumentverificationComponent,
    SanctionlaterComponent,
    CMDashBoardComponent,
    DisplayListComponent,

  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreditmanagerModule { }
