import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import { ManageCompanyService } from '../manage-company.service';
import { ManageCompany } from '../manage-company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor (private router:Router,private companyservice:ManageCompanyService) { }
  companyList:Observable<any[]>

  ngOnInit() {
    this.companyservice.getAllCompany().subscribe(data =>{  
      this.companyList =data;  
  
  })
  }
  deleteCompany(managecompany : ManageCompany ) {

    this.companyservice.deleteCompany(managecompany.companyName).subscribe(data => {
 
   this.companyservice.getAllCompany().subscribe(data =>{
 
  this.companyList =data;});
 
      });
    };
    updateCompany(managecompany : ManageCompany ) {
      window.localStorage.removeItem("edit-companyName");

      window.localStorage.setItem("edit-companyName", managecompany.companyName.toString());
      this.router.navigate(['manage-company']);
      }
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
     
  



