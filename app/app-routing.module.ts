import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { SectorComponent } from './sector/sector.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { IpoListComponent } from './ipo-list/ipo-list.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'update-ipo',component:UpdateIPOComponent },   
{path:'import-data',component:ImportDataComponent},
{path:'manage-company',component:ManageCompanyComponent},
{path:'manage-exchange',component:ManageExchangeComponent},
{path:'sector',component:SectorComponent},
{path:'admin',  component:AdminComponent},
{path:'user',  component:UserComponent},
{path:'compare-company',  component:CompareCompanyComponent},
{path:'ipo-list',  component:IpoListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
