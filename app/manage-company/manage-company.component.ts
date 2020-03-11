import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ManageCompanyService } from '../manage-company.service';
import { ManageCompany } from '../manage-company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor( private router:Router,private companyservice:ManageCompanyService) { }
  company : ManageCompany=new ManageCompany();  
  submitted = false;  

  ngOnInit() {
    var companyName=window.localStorage.getItem("edit-companyName");
    if(companyName!=null&&companyName!=""){
   this.companyservice.findOneInAll12(companyName)
  
   .subscribe(data => {
    this.company=data; this.companysaveform.setValue(this.company)
  
    });
   }
    this.submitted=false;  

  }
  companysaveform=new FormGroup({ 
    companyName:new FormControl() , 
    turnOver:new FormControl() , 
    ceo:new FormControl() , 
    bod:new FormControl(),  
    sector:new FormControl(),  
    brief:new FormControl(),
    stockCode:new FormControl()  
  
  });  
  saveCompany(saveCompany){  
    this.company=new ManageCompany ();
    this.company.companyName=this.CompanyName.value;   
    this.company.turnOver=this.TurnOver.value;  
    this.company.ceo=this.Ceo.value;  
    this.company.bod=this.Bod.value; 
    this.company.sector=this.Sector.value; 
    this.company.brief=this.Brief.value; 
    this.company.stockCode=this.Stockcode.value; 

    this.submitted = true;  
    this.save();  
  }  
  save() {
    this.companyservice.saveCompany(this.company)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.company = new ManageCompany(); 
    window.localStorage.removeItem("edit-companyName");
    this.router.navigate(['companylist']) 
  }
  get CompanyName(){  
    return this.companysaveform.get('companyName');  
  }  
  get TurnOver(){  
    return this.companysaveform.get('turnOver');  
  }  
  get Ceo(){  
    return this.companysaveform.get('ceo');  
  }  
  get Bod(){  
    return this.companysaveform.get('bod');  
  }  
  get Sector(){  
    return this.companysaveform.get('sector');  
  }  
  get Brief(){  
    return this.companysaveform.get('brief');  
  }  
  get Stockcode(){  
    return this.companysaveform.get('stockCode');  
  }  
  savecompanyForm(){  
    this.submitted=false;  
    this.companysaveform.reset();  
  }  


}
