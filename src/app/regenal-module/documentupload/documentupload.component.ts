import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.css']
})
export class DocumentuploadComponent implements OnInit {

  constructor(private formBulder:FormBuilder, private commonService:CommonService,
    private actRout:ActivatedRoute, private loc:Location) { }
  
  DocForm!:FormGroup;

  doc= new Document();
  selectpancard:any;
  selectaddressproof:any;
  selectitr:any;
  selectadharcard:any;
  selectphoto:any;
  selectsignature:any;
  selectthumb:any;
  selectbankcheque:any;
  selectproperty_details:any;
  selectsalaryslip:any;
  retrievedDoc:any;

  ngOnInit(): void {
    this.DocForm=this.formBulder.group({
      customerid:[]
    })
    this.update()
  }
  update()
  {
    this.actRout.paramMap.subscribe
    (
      param1=>
      {
        let id=parseInt(param1.get('eid'));
        this.DocForm.get('customerid').setValue(id);
      }
    )
  }

  onSelectedFile1(event:any){this.selectpancard=event.target.files[0];}
  onSelectedFile2(event:any){this.selectaddressproof=event.target.files[0];}
  onSelectedFile3(event:any){this.selectitr=event.target.files[0];}
  onSelectedFile4(event:any){this.selectadharcard=event.target.files[0];}
  onSelectedFile5(event:any){this.selectphoto=event.target.files[0];}
  onSelectedFile6(event:any){this.selectsignature=event.target.files[0];}
  onSelectedFile7(event:any){this.selectthumb=event.target.files[0];}
  onSelectedFile8(event:any){this.selectbankcheque=event.target.files[0];}
  onSelectedFile9(event:any){this.selectproperty_details=event.target.files[0];}
  onSelectedFile10(event:any){
    console.log(this.selectsalaryslip);
    this.selectsalaryslip=event.target.files[0];
  }
    save(){
    const document1=JSON.stringify(this.DocForm.value);
    const uploadDocument=new FormData();
    uploadDocument.append("pancard",this.selectpancard);
    uploadDocument.append("addressproof",this.selectaddressproof);
    uploadDocument.append("itr",this.selectitr);
    uploadDocument.append("adharcard",this.selectadharcard);
    uploadDocument.append("photo",this.selectphoto);
    uploadDocument.append("signature",this.selectsignature);
    uploadDocument.append("thumb",this.selectthumb);
    uploadDocument.append("bankcheque",this.selectbankcheque);
    uploadDocument.append("property_details",this.selectproperty_details);
    uploadDocument.append("salaryslip",this.selectsalaryslip);
    uploadDocument.append("doc",document1);
  
   this.commonService.postDocument(uploadDocument).subscribe();
   console.log("upload method")
   window.location.reload();
      this.loc.back();
    }
  
  
}
