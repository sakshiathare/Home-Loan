import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Docmodel } from 'src/app/model/docmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentverification',
  templateUrl: './documentverification.component.html',
  styleUrls: ['./documentverification.component.css']
})
export class DocumentverificationComponent implements OnInit {

  constructor(private commonService:CommonService, private actRout:ActivatedRoute, private formbuilder:FormBuilder, private loc:Location) { }
  retrievedDoc!:Docmodel[]

  verificationForm!:FormGroup;

  ngOnInit(): void {
    this.actRout.paramMap.subscribe(
      param1=>
      {
      let id=parseInt(param1.get('documentid'));
      this.commonService.getDocSingle(id).subscribe((list:Docmodel[])=>{this.retrievedDoc=list})
      }
    )

    this.verificationForm=this.formbuilder.group({
      addressProof:['', Validators.required],
      itr:['',Validators.required],
      pancard:['', Validators.required],
      adharcard:['', Validators.required],
      signature:['', Validators.required],
      photo:['', Validators.required],
      thumb:['', Validators.required],
      bankcheck:['', Validators.required],
      propertydetails:['', Validators.required],
      salaryslip:['', Validators.required]

    })

  }
  back(){
    this.loc.back();
  }


}
