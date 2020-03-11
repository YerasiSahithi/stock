



import { Sector } from 'src/app/sector';



import { SectorService } from 'src/app/sector.service';



import { IfStmt } from '@angular/compiler';





import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';





import { Router } from '@angular/router';




import { Observable } from 'rxjs/internal/Observable';



import { Stockprice } from 'src/app/stockprice';







import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';







import { of } from 'rxjs';



import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';




import * as Highcharts from 'highcharts';

import { StockpriceService } from 'src/app/stockprice.service';
import { HighchartsService } from '../highcharts.service';
import { ManageCompany } from '../manage-company';
import { ManageCompanyService } from '../manage-company.service';

@Component({
 selector: 'app-compare-company',
 templateUrl: './compare-company.component.html',
 styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {
 @ViewChild('charts') public chartEl: ElementRef;
 myGroup: FormGroup;
 constructor(private hcs: HighchartsService,private formBuilder: FormBuilder,private companyservice:ManageCompanyService,private sectorservice:SectorService,private stockpriceService:StockpriceService) { }

 companyList: ManageCompany[];
 sectorList: Sector[];
 companyListAll: ManageCompany[];
 stockpriceList: Observable<Stockprice[]>;
 ngOnInit() {
 this.hcs.createChart(this.chartEl.nativeElement);
 this.myGroup= this.formBuilder.group({
  "choose": new FormControl([ Validators.required ]),
  "sectorName": new FormControl([ Validators.required ]),
  "companyName": new FormControl([ Validators.required ]),
  "fromdate":new FormControl([ Validators.required ]),
  "todate":new FormControl([ Validators.required ])
  })
 this.companyservice.getAllCompany().subscribe(data => {
  this.companyList = data;
  this.companyListAll=data;
  this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
  })
  this.sectorservice.getAllSector().subscribe(data => {
  this.stockpriceList = data;
  })
  this.stockpriceService.getAllStockPrice().subscribe(data => {
  this.sectorList = data;
  })
 }
 sectorChange()
 {
 alert(1234);
 var sectorValue=this.myGroup.controls['sectorName'].value;
 this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
 }
}









