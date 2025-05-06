import { __values } from 'tslib';
import { Customer } from './../../model/customer';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-viewdetails',
  templateUrl: './registration-viewdetails.component.html',
  styleUrls: ['./registration-viewdetails.component.css']
})
export class RegistrationViewdetailsComponent implements OnInit {

  constructor(private commonSerivice:CommonService, private actRout:ActivatedRoute) { }
  customer!:Customer;


  ngOnInit(): void {
    this.actRout.paramMap.subscribe
    (
      param1=>
      {
        this.commonSerivice.getSingleCustomer(parseInt(param1.get('customerid'))).subscribe
        (data=>
          {
            this.customer=data
          }
        );
      }
    )

  }


}
