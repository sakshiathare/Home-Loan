
import { Docmodel } from './../model/docmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cibil } from '../model/cibil';
import { Customer } from '../model/customer';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor(private http:HttpClient) { }
//****Enquiry method
postEnquiryForm(enquiry:Enquiry):Observable<Enquiry>
{
  return this.http.post<Enquiry>("http://localhost:8082/enquiry/post",enquiry)
}

getEnquiryList():Observable<Enquiry[]>
{
  return this.http.get<Enquiry[]>("http://localhost:8082/enquiry/getAll");
}
//**** customer method
postCustomer(customer:Customer):Observable<Customer>
{
  return this.http.post<Customer>("http://localhost:8082/customer/post",customer)
}
getSingleCustomer(id:number):Observable<Customer>
{
  return this.http.get<Customer>("http://localhost:8082/customer/get/"+id)
}
getAllCustomer():Observable<Customer[]>
{
  return this.http.get<Customer[]>("http://localhost:8082/customer/getAll");
}

//****Cibil methods*****
getCibilScore():Observable<number>
{
return this.http.get<number>("http://localhost:8082/cibil/score");
}
postCibileScore(cibil:Cibil):Observable<Cibil>
{
  console.log(cibil)
  return this.http.post<Cibil>("http://localhost:8082/cibil/post",cibil)
}
getCibilList():Observable<Cibil[]>
{
  return this.http.get<Cibil[]>("http://localhost:8082/cibil/get")
}
// Mail send method
postMail(cibil:Cibil):Observable<Cibil>{
  return this.http.post<Cibil>("http://localhost:8082/mail/post",cibil);
}
//Document post Method
postDocument(uploadDocument):Observable<Docmodel>
{
  console.log("Upload PHoto")
  console.log("Pancard"+uploadDocument.pancard)
  console.log("addressproof"+uploadDocument.addressproof)
  console.log(uploadDocument.customerid)
  return this.http.post<Docmodel>("http://localhost:8082/document/post",uploadDocument)
}
//document get all
getAllDocument():Observable<any[]>
{
 return this.http.get<any[]>("http://localhost:8082/document/get");
}
//document by id
getDocSingle(documentid:number):Observable<any[]>
{
  return this.http.get<any[]>("http://localhost:8082/documnet/getById/"+documentid);
}


}

