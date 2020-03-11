import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ManageCompany } from './manage-company';



@Injectable({
  providedIn: 'root'
})
export class ManageCompanyService {
  getcompanyList() {
    throw new Error("Method not implemented.");
  }  
  private baseUrl = 'http://localhost:8069/Company/Company';  

  constructor(private http:HttpClient) { }
  getAllCompany(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllCompany');  
  }  
  saveCompany(Company: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveCompany', Company);  
  }  
  deleteCompany(companyName: String): Observable<object> {  
    return this.http.delete(`${this.baseUrl}/deleteCompany/${companyName}`);  
  }  
  findOneInAll12(companyName: String): Observable<ManageCompany> {  
    return this.http.get<ManageCompany>(this.baseUrl+'/findOneInAll12/'+companyName);  
  }  
  updateCompany(companyName: String): Observable<object> {  
    return this.http.put(this.baseUrl+'/updateCompany/{companyName}',companyName);  
  }  

}
