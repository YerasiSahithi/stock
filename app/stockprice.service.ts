import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';


@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8069/StockPrice/StockPrice';  
  saveStockprice: any;

  constructor(private http:HttpClient) { }
  getAllStockPrice(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllStockPrice');  
  }  
  saveStockPrice(stock: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveStockPrice', stock);  
  }  
  deleteStockPrice(companyCode: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteStockPrice/${companyCode}`);  
  }  
  findOneInAll678(companyCode: number): Observable<any> { 
    return this.http.get<Stockprice>(this.baseUrl+'/findOneInAll678/'+companyCode);  

  }  
  updateStockPrice(companyCode: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateStockPrice/{companyCode}',companyCode);  
  }  


}
