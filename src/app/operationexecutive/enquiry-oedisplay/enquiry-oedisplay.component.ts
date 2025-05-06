import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-enquiry-oedisplay',
  templateUrl: './enquiry-oedisplay.component.html',
  styleUrls: ['./enquiry-oedisplay.component.css']
})
export class EnquiryOEDisplayComponent implements OnInit {
  enquiryOEDisplay!:Enquiry[];
  count:number=3
  page:number=1;
  
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getEnquiryList().subscribe((data:Enquiry[])=>{this.enquiryOEDisplay=data})   
  }

}
