import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './userlist/userlist.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { IpoListComponent } from './ipo-list/ipo-list.component';
import { ExchangelistComponent } from './exchangelist/exchangelist.component';
import { SectorComponent } from './sector/sector.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';  
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { ChartComponent } from './chart/chart.component';
import { HighchartsService } from './highcharts.service';
import { HighchartsChartModule } from 'highcharts-angular';





/*export function highchartsfactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more');
  const sg = require('highcharts/modules/solid-gauge');
  hcm(hc);
  sg(hc);
  return hc;
}*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    UserListComponent,
    CompanylistComponent,
    IpoListComponent,
    ExchangelistComponent,
    SectorComponent,
    SectorlistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    CompareCompanyComponent,
    ChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,  
    ReactiveFormsModule,  
    ChartModule,
    HighchartsChartModule,

    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },

      {path:'home',component:HomeComponent},
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent},
        {path:'chart',component:ChartComponent},

      
    ]),
    
    RouterModule.forRoot([
      {
        path:'admin',
        component:AdminComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'user',
        component:UserComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'import-data',
        component:ImportDataComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'manage-company',
        component:ManageCompanyComponent

      }
    ]),
    RouterModule.forRoot([
      {
        path:'userlist',
        component:UserListComponent

      }
    ]),
    RouterModule.forRoot([
      {
        path:'companylist',
        component:CompanylistComponent,

      }
    ]),
    RouterModule.forRoot([
      {
        path:'update-ipo',
        component:UpdateIPOComponent

      }
    ]),
    RouterModule.forRoot([
      {
        path:'manage-exchange',
        component:ManageExchangeComponent


      }
    ]),
    RouterModule.forRoot([
      {
        path:'ipo-list',
        component:IpoListComponent


      }
    ]),
    RouterModule.forRoot([
      {
        path:'exchangelist',
        component:ExchangelistComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'sector',
        component:SectorComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'sectorlist',
        component:SectorlistComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'stockprice',
        component:StockpriceComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'stockpricelist',
        component:StockpricelistComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'compare-company',
        component:CompareCompanyComponent
      }
    ])




  ],
  providers: [
    HighchartsService
   /* {
      provide: HighchartsStatic,
      useFactory: highchartsfactory
     }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
