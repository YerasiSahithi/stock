import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockpriceService } from '../stockprice.service';
import { Observable } from 'rxjs';
import { Stockprice } from '../stockprice';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  stockPriceList:Observable<any[]>

  ngOnInit() {
    this.stockpriceservice.getAllStockPrice().subscribe(data =>{  
      this.stockPriceList =data;  
  
  })

  }
  deleteStockPrice(stockprice : Stockprice ) {

    this.stockpriceservice.deleteStockPrice(stockprice.companyCode).subscribe(data => {
 
   this.stockpriceservice.getAllStockPrice().subscribe(data =>{
 
  this.stockPriceList =data;});
 
   });
  };
  updateStockPrice( stockprice: Stockprice ) {
    window.localStorage.removeItem("edit-companyCode");

    window.localStorage.setItem("edit-companyCode", stockprice.companyCode.toString());
    this.router.navigate(['stockprice']);
    }

}
