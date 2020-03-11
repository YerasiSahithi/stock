import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ManageExchange } from './manage-exchange';


@Injectable({
  providedIn: 'root'
})
export class ManageExchangeService {
  private baseUrl = 'http://localhost:8069/StockExchange/StockExchange';  

  constructor(private http:HttpClient) { }
  getAllStockExchange(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllStockExchange');  
  }  
  saveStockExchange(exchange: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveStockExchange', exchange);  
  }  
  deleteStockExchange(id: number): Observable<object> {  
    return this.http.delete(`${this.baseUrl}/deleteStockExchange/${id}`);  
  }  
  findOneInAll56(id: number): Observable<any> {  
    return this.http.get<ManageExchange>(this.baseUrl+'/findOneInAll56/'+id);  
  }  
  updateStockExchange(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateStockExchange/{id}',id);  
  }  

}
