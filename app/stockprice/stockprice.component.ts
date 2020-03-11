import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  stockprice : Stockprice=new Stockprice();  
  submitted = false;  

  ngOnInit() {
    var companyCode=window.localStorage.getItem("edit-companyCode");
    if(companyCode!=null&&companyCode!=""){
   this.stockpriceservice.findOneInAll678(parseInt(companyCode))
  
   .subscribe(data => {
    this.stockprice=data; this.stockpricesaveform.setValue(this.stockprice)
  
    });
   }

    this.submitted=false;  

  }
  stockpricesaveform=new FormGroup({ 
    companyCode:new FormControl() , 
    stockExchange:new FormControl() , 
    currentPrice:new FormControl() , 
    date:new FormControl() , 

  });  
  saveStockPrice(saveStockPrice){  
    this.stockprice=new Stockprice ();
    this.stockprice.companyCode=this.CompanyCode.value;   
    this.stockprice.stockExchange=this.StockExchange.value;  
    this.stockprice.currentPrice=this.CurrentPrice.value;  
    this.stockprice.date=this.Date.value;  

    this.submitted = true;  
    this.save();  
  }  
  save() {

    this.stockpriceservice.saveStockPrice(this.stockprice).subscribe(data => console.log(data), error => console.log(error));

    this.stockprice = new Stockprice();
    window.localStorage.removeItem("edit-companyCode");
    this.router.navigate(['stockpricelist']);  

   }   
   get CompanyCode(){  
    return this.stockpricesaveform.get('companyCode');  
  }  
  get StockExchange(){  
    return this.stockpricesaveform.get('stockExchange');  
  }  
  get CurrentPrice(){  
    return this.stockpricesaveform.get('currentPrice');  
  }  
  get Date(){  
    return this.stockpricesaveform.get('date');  
  }  
  saveStockPriceForm(){  
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  }  

}
