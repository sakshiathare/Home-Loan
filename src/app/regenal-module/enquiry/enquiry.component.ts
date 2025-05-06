import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private fb:FormBuilder, private commonService:CommonService) { }
  EnquiryForm!:FormGroup;
  msg!:string;
  ngOnInit(): void {
    this.EnquiryForm=this.fb.group({
      eID:[''],
      name:['',Validators.required],
      dob :['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      email:['',Validators.required],
      mobileNo:['',Validators.required],
      panCardNo:['',Validators.required],
      adharCardNo:['',Validators.required]
    })
  }
  enquiryCall(){
    let msg1:any=confirm("Do you really want to send Data?");
    if(msg1){
      this.commonService.postEnquiryForm(this.EnquiryForm.value).subscribe();
      window.location.reload();
    }
    else{
      this.msg="Data not send yet...";
    }
  }
  

}
