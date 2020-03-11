import { Component, OnInit } from '@angular/core';
import { ManageExchangeService } from '../manage-exchange.service';
import { Observable } from 'rxjs';
import { ManageExchange } from '../manage-exchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent implements OnInit {

  constructor(private router:Router,private manageexchangeservice:ManageExchangeService) { }
  stockExchangeList:Observable<any[]>

  ngOnInit() {
    this.manageexchangeservice.getAllStockExchange().subscribe(data =>{  
      this.stockExchangeList =data;  
  
  })

  }
  deleteStockExchange(exchange : ManageExchange ) {

    this.manageexchangeservice.deleteStockExchange(exchange.id).subscribe(data => {
      this.manageexchangeservice.getAllStockExchange().subscribe(data =>{
 
        this.stockExchangeList =data;});
      });
    }
    updateStockExchange(exchange :ManageExchange ) {
      window.localStorage.removeItem("edit-id");

      window.localStorage.setItem("edit-id", exchange.id.toString());
      this.router.navigate(['manage-exchange']);

  }

}
