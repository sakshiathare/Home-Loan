import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Cibil } from 'src/app/model/cibil';

@Component({
  selector: 'app-cibil-status',
  templateUrl: './cibil-status.component.html',
  styleUrls: ['./cibil-status.component.css']
})
export class CibilStatusComponent implements OnInit {

  cibilList !:Cibil[];
  count:number=3
  page:number=1;
  msg!:string;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getCibilList().subscribe(list=>{this.cibilList=list})
  }

  emailCall(cibilData:Cibil){
    this.commonService.postMail(cibilData).subscribe();
    this.msg="mail send successfully";
  }

}
