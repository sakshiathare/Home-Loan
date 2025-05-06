import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-cibil-generated',
  templateUrl: './cibil-generated.component.html',
  styleUrls: ['./cibil-generated.component.css']
})
export class CibilGeneratedComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private loc:Location, private actRout:ActivatedRoute, private commonService:CommonService) { }

  cibilForm!:FormGroup;
  setScore!:number;
  currentDate!:any;
  ngOnInit(): void {
    this.cibilForm=this.formbuilder.group({
      cibilId:[],
      cibilScore:[],
      cibilScoreDateTime:[''],
      status:[''],
      remark:[''],
      eid:[],
    })
    this.setValue1();
 
  }
  setValue1(){
    this.actRout.paramMap.subscribe
    (
      param1=>
      {
        console.log(param1);
        this.cibilForm.get('eid')?.setValue(parseInt(param1.get('eid')))
      }
    );
    
    var time = new Date();
    this.cibilForm.get('cibilScoreDateTime').setValue
    (
      (
        time. toLocaleString
        (
          //'en-US', { hour: 'numeric', hour12: true }
          'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'  }
        )
      )
    );
  }

  onSubmit(){
   // console.log(this.cibilForm.value)
    this.commonService.postCibileScore(this.cibilForm.value).subscribe();
    window.location.reload();
    this.loc.back();
  }
  cibilScore(){
    this.commonService.getCibilScore().subscribe(score=>{this.setScore=score})
  }
  back(){
    this.loc.back();
  }

}
