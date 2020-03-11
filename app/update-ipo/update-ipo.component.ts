import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { UpdateIpoService } from '../update-ipo.service';
import { UpdateIpo } from '../update-ipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {

  constructor(private router:Router,private updateiposervice:UpdateIpoService) { }
  ipo : UpdateIpo=new UpdateIpo();  
  submitted = false;  

  ngOnInit() {
    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!=""){
   this.updateiposervice.findOneInAll123(parseInt(id))
  
   .subscribe(data => {
    this.ipo=data; this.iposaveform.setValue(this.ipo)
    });
   }
    this.submitted=false;  

  }
    iposaveform=new FormGroup({ 
    id:new FormControl() , 
    companyName:new FormControl() , 
    stockExchange:new FormControl() , 
    price:new FormControl(),  
    noShare:new FormControl(),
    remarks:new FormControl() , 
    opendatetime:new FormControl()  

  });  
  saveIPO(saveIPO){  
    this.ipo=new UpdateIpo();
    this.ipo.id=this.Id.value;   
    this.ipo.companyName=this.CompanyName.value;  
    this.ipo.stockExchange=this.StockExchange.value;  
    this.ipo.price=this.Price.value; 
    this.ipo.noShare=this.NoShare.value; 
    this.ipo.remarks=this.Remarks.value; 
    this.ipo.opendatetime=this.Opendatetime.value; 

    this.submitted = true;  
    this.save();  
  }  
  save() {
    this.updateiposervice.saveIPO(this.ipo)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ipo = new UpdateIpo ();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['ipolist']) 

  }
  get Id(){  
    return this.iposaveform.get('id');  
  }  
  get CompanyName(){  
    return this.iposaveform.get('companyName');  
  }  
  get StockExchange(){  
    return this.iposaveform.get('stockExchange');  
  }  
  get Price(){  
    return this.iposaveform.get('price');  
  }  
  get NoShare(){  
    return this.iposaveform.get('noShare');  
  }  
  get Remarks(){  
    return this.iposaveform.get('remarks');  
  }  
  get Opendatetime(){  
    return this.iposaveform.get('opendatetime');  
  }  
  saveIPOForm(){  
    this.submitted=false;  
    this.iposaveform.reset();  
  }  

}
