import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Injectable } from '@angular/core';
import { UpdateIpo } from './update-ipo';

@Injectable({
  providedIn: 'root'
})
export class UpdateIpoService {
  getuserList() {
    throw new Error("Method not implemented.");
  }  
  private baseUrl = 'http://localhost:8069/IPO/IPO';  

  constructor(private http:HttpClient) { }
  getAllIPO(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllIPO');  
  }  
  saveIPO(IPO: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveIPO', IPO);  
  }  
  deleteIPO(id: number): Observable<object> {  
    return this.http.delete(this.baseUrl+'/deleteIPO/'+id);  
  }  
  findOneInAll123(id: number): Observable<any> {  
    return this.http.get<UpdateIpo>(this.baseUrl+'/findOneInAll123/'+id);  
  }  
  updateIPO(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateIPO/{id}',id);  
  }  

}
