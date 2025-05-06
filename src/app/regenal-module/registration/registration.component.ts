import { Dependant } from './../../model/dependant';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor
  (private formBulder:FormBuilder, private commonService:CommonService, private loc:Location) { }

  registerForm!:FormGroup;
 
  ngOnInit(): void {
    this.registerForm=this.formBulder.group(
    {
    customerid : [''],
    name:['',Validators.required],
    dob:['',Validators.required],
    age:['',Validators.required],
    gender:['',Validators.required],
    email:['',Validators.required],
    mobileNo:['',Validators.required],
    additionalMobileNo:['',Validators.required],
    panCardNo:['',Validators.required],
    adharCardNo:['',Validators.required],
    amountPaidForHome:['',Validators.required],
    totalLoanRequired:['',Validators.required],
    educationInfo:['',Validators.required],

    //secondory refrance start
    dependant:this.formBulder.group({
      did:[],
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      noOfFamilyMember:['',Validators.required],
      noOfChild:['',Validators.required],
      maritalStatus:['',Validators.required],
      dependentMember:['',Validators.required],
      spouseName:['',Validators.required],
      }),

      //Customer Address
      customerAddress:this.formBulder.group({
        aid:[],
        //customer local address
        localAddress:this.formBulder.group(
          {   
              localid:[],
              houseNo:['',Validators.required],
              streetName:['',Validators.required],
              areaname:['',Validators.required],
              cityname:['',Validators.required],
              district:['',Validators.required],
              state:['',Validators.required],
              pincode:['',Validators.required]
          }),
          //Customer permanet address
        permanentAddress:this.formBulder.group(
        {   permanetId:[],
            houseNo:['',Validators.required],
            streetName:['',Validators.required],
            areaname:['',Validators.required],
            cityname:['',Validators.required],
            district:['',Validators.required],
            state:['',Validators.required],
            pincode:['',Validators.required]
        })
      }),
      //profesion information
      profession:this.formBulder.group({
        pid:[],
        professionType:['',Validators.required],
        salary:['',Validators.required],
        salaryType:['',Validators.required],
        workingPeriod:['',Validators.required],
        designation:['',Validators.required]
      }),
     // privious loan information
      previousloan:this.formBulder.group(
        {   loanId:[],
            loanAmount:['',Validators.required],
            tenure:['',Validators.required],
            paidAmount:['',Validators.required],
            remainingAmount:['',Validators.required],
            status:['',Validators.required],
            remark:['',Validators.required]
        }),
        //Account details
      accountDetails:this.formBulder.group({
              accountid:[],
              accountype:['',Validators.required],
              accountBalance:['',Validators.required],
              accountHolderName:['',Validators.required],
              accountStatus:['',Validators.required],
              accountNo:['',Validators.required]
          }),
          //Property information
          propertyInfo:this.formBulder.group(
            {   propertyid:[],
                propertytype:['',Validators.required],
                propertyPrice:['',Validators.required],
                constructionPrice:['',Validators.required],
                //propery address
                localAddress:this.formBulder.group({
                      houseNo:['',Validators.required],
                      streetName:['',Validators.required],
                      areaname:['',Validators.required],
                      cityname:['',Validators.required],
                      district:['',Validators.required],
                      state:['',Validators.required],
                      pincode:['',Validators.required]
                  })
                }),
                //gaurenter Details
                guarantorDetails:this.formBulder.group({
                      gid:[],
                      name: ['',Validators.required],
                      dob:['',Validators.required],
                      relationWithCustomer:['',Validators.required],
                      mobNo:['',Validators.required],
                      adharCardNo:['',Validators.required],
                      jobDetails:['',Validators.required],
                      // Gaurenter Address
                      localAddress:this.formBulder.group(
                      {
                      houseNo:['',Validators.required],
                      streetName:['',Validators.required],
                      areaname:['',Validators.required],
                      cityname:['',Validators.required],
                      district:['',Validators.required],
                      state:['',Validators.required],
                      pincode:['',Validators.required]
                      })
                    }) 

    })
    // For set enquiry attributes in registration form
    this.updateData();
    this.address();
  }
  registerCall()
  {
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.get("dependant")?.value)
    // console.log(this.registerForm.get('customerAddress')?.get('localAddress')?.value)
    // console.log(this.registerForm.get('customerAddress')?.get('permanentAddress')?.value)
    // console.log(this.registerForm.get('profession')?.value)
    // console.log(this.registerForm.get('previousloan')?.value)
    // console.log(this.registerForm.get('accountDetails')?.value)
    // console.log(this.registerForm.get('propertyInfo')?.value)
    // console.log(this.registerForm.get('propertyInfo')?.get('localAddress')?.value)
    // console.log(this.registerForm.get('guarantorDetails')?.value)
    // console.log(this.registerForm.get('guarantorDetails')?.get('loaclAddress')?.value)
    this.commonService.postCustomer(this.registerForm.value).subscribe();
    window.location.reload();
    this.loc.back();
  }

  updateData()
  {//set Customer form value
    let enquiryObjct:any=this.loc.getState();
    this.registerForm.get('customerid').setValue(enquiryObjct.eid);
    this.registerForm.get('name').setValue(enquiryObjct.name);
    this.registerForm.get('dob').setValue(enquiryObjct.dob);
    this.registerForm.get('age').setValue(enquiryObjct.age);
    this.registerForm.get('gender').setValue(enquiryObjct.gender);
    this.registerForm.get('email').setValue(enquiryObjct.email);
    this.registerForm.get('mobileNo').setValue(enquiryObjct.mobileNo);
    this.registerForm.get('panCardNo').setValue(enquiryObjct.panCardNo);
    this.registerForm.get('adharCardNo').setValue(enquiryObjct.adharCardNo);
    //set Document customer id

  }
  address(){
    console.log("inside check box")
    this.registerForm.get('customerAddress').get('localAddress').get('houseNo').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('houseNo').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('streetName').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('streetName').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('areaname').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('areaname').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('cityname').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('cityname').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('district').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('district').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('state').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('state').value
    );
    this.registerForm.get('customerAddress').get('localAddress').get('pincode').setValue
    (
      this.registerForm.get('customerAddress').get('permanentAddress').get('pincode').value
    );

  }


}
