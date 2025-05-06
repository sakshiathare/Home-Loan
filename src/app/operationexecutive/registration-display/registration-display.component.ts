import { CommonService } from 'src/app/Service/common.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-display',
  templateUrl: './registration-display.component.html',
  styleUrls: ['./registration-display.component.css']
})
export class RegistrationDisplayComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  customerlist!:Customer[];
  count:number=3
  page:number=1;
  ngOnInit(): void {
    this.commonService.getAllCustomer().subscribe(list=>{this.customerlist=list})
  }

}
