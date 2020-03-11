import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8069/Sector/Sector';  

  constructor(private http:HttpClient) { }
  getAllSector(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllSector');  
  }  
  saveSector(sector: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveSector', sector);  
  }  
  deleteSector(id: number): Observable<object> {  
    return this.http.delete(`${this.baseUrl}/deleteSector/${id}`);  
  }  
  findOneInAll1234(id: number): Observable<any> {  
    return this.http.get<Sector>(this.baseUrl+'/findOneInAll1234/'+id);  
  }  
  updateSector(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateSector/{id}',id);  
  }  

}
