import { Customer } from './../../model/customer';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sanctionlater',
  templateUrl: './sanctionlater.component.html',
  styleUrls: ['./sanctionlater.component.css']
})
export class SanctionlaterComponent implements OnInit {

  constructor(private actRout:ActivatedRoute, private commonService:CommonService, private formBuilder:FormBuilder) { }
  customer!:Customer;
  sanctionForm!:FormGroup;

  ngOnInit(): void {
    this.actRout.paramMap.subscribe
    (
      param1=>
      {
        this.commonService.getSingleCustomer(parseInt(param1.get('customerid'))).subscribe(data=>{this.customer=data})
      }
    )

    this.sanctionForm=this.formBuilder.group({
    sid:[],
    sanctionDate:[''],
    prospectNo:[],
    applicantName:[''],
    contactDetails:[],
    loanAmtSanctioned:[],
    interestType:[],
    rateOfInterest:[],
    loanTenure:[],
    monthlyEmiAmount:[],
    modeOfPayment:[''],
    remarks:[''],
    termsCondition:[''],
    Status:['']
    })
    this.editData();
  }

editData(){
  this.sanctionForm.get('applicantName').setValue(this.customer.name);
  this.sanctionForm.get('contactDetails').setValue(this.customer.mobileNo);

  var time = new Date();
  this.sanctionForm.get('sanctionDate').setValue(
    time. toLocaleString
    (
      //'en-US', { hour: 'numeric', hour12: true }
      'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'  }
    )
  );


}
sanctionCall(){
  console.log(this.sanctionForm.value)
}

}
