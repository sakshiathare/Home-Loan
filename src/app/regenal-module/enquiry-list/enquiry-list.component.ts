import { CommonService } from './../../Service/common.service';
import { Enquiry } from './../../model/enquiry';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {
  enquiryList!:Enquiry[];
  count:number=3
  page:number=1;
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getEnquiryList().subscribe((data:Enquiry[])=>{this.enquiryList=data}) 
  }

}
