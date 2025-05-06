import { GaurantorDetails } from './gaurantor-details';
import { Propertyinfo } from './propertyinfo';
import { AccountDetails } from './account-details';
import { Previousloan } from './previousloan';
import { CustomerAddress } from './customer-address';
import { Dependant } from './dependant';
import { Profession } from './profession';

export class Customer {
    customerid!:number;
    name!:string;
    dob!:string;
    age!:number;
    gender!:string;
    email!:string;
    mobileNo!:number;
    additionalMobileNo!:number;
    panCardNo!:string;
    adharCardNo!:number;
    amountPaidForHome!:number;
    totalLoanRequired!:number;
    educationInfo!:string;
    
    //Secondory Refrance
    dependant!:Dependant;
    customerAddress!:CustomerAddress
    profession!:Profession;
    previousloan!:Previousloan;
    accountDetails!:AccountDetails;
    propertyInfo!:Propertyinfo
    guarantorDetails!:GaurantorDetails
}
