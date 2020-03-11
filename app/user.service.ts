import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';
  


@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {
  
  private baseUrl = 'http://localhost:8069/User/UserPortal';  
  
  constructor(private http:HttpClient) { }  
  
  getAllUser(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllUser');  
  }  
  
  saveUser(User: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveUser', User);  
  }  
  
  deleteUser(id: number): Observable<any> {  
    return this.http.delete<User>(`${this.baseUrl}/deleteUser/${id}`);  
  }  
  
  findOneInAll(id: number): Observable<any> {  
    return this.http.get<User>(this.baseUrl+'/findOneInAll/'+id);  
  }  
  
  updateUser(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateUser/{id}',id);  
  }  
  findByUserNameAndPassword(userName:String, password:String):Observable<User>{

    return this.http.get<User>(this.baseUrl+'/findByUserNameAndPassword/'+userName+'/'+password);
  
   }
   uploadFile( file: File , id : number ) : Observable<any>

   {
  
    let url = this.baseUrl + "uploadImage/" + id ;
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(url , formdata);
  
   }  
  
}  

