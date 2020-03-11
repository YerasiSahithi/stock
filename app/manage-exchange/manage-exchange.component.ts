import { Component, OnInit } from '@angular/core';
import { ManageExchangeService } from '../manage-exchange.service';
import { ManageExchange } from '../manage-exchange';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  constructor(private router:Router,private manageexchangeservice:ManageExchangeService) { }
  exchange : ManageExchange=new ManageExchange();  
  submitted = false;  

  ngOnInit() {
    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!=""){
   this.manageexchangeservice.findOneInAll56(parseInt(id))
  
   .subscribe(data => {
    this.exchange=data; this.exchangesaveform.setValue(this.exchange)
  
    });
   }


    this.submitted=false;  

  }
  exchangesaveform=new FormGroup({ 
    id:new FormControl() , 
    stockExchange:new FormControl() , 
    brief:new FormControl() , 
    contactAddress:new FormControl(),  
    remarks:new FormControl(),  
  
  });  
  saveStockExchange(saveStockExchange){  
    this.exchange=new ManageExchange ();
    this.exchange.id=this.Id.value;   
    this.exchange.stockExchange=this.StockExchange.value;  
    this.exchange.brief=this.Brief.value;  
    this.exchange.contactAddress=this.ContactAddress.value; 
    this.exchange.remarks=this.Remarks.value; 

    this.submitted = true;  
    this.save();  
  }  
  save() {

    this.manageexchangeservice.saveStockExchange(this.exchange).subscribe(data => console.log(data), error => console.log(error));
    this.exchange = new ManageExchange();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['exchangelist']) 

   }   
   
   get Id(){  
    return this.exchangesaveform.get('id');  
  }  
  get StockExchange(){  
    return this.exchangesaveform.get('stockExchange');  
  }  
  get Brief(){  
    return this.exchangesaveform.get('brief');  
  }  
  get ContactAddress(){  
    return this.exchangesaveform.get('contactAddress');  
  }  
  get Remarks(){  
    return this.exchangesaveform.get('remarks');  
  }  
  saveExchangeForm(){  
    this.submitted=false;  
    this.exchangesaveform.reset();  
  }  

}
