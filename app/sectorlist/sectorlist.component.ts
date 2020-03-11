import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { Sector } from '../sector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {

  constructor(private router:Router,private sectorservice:SectorService) { }
  SectorList:Observable<any[]>

  ngOnInit() {
    this.sectorservice.getAllSector().subscribe(data =>{  
      this.SectorList =data;  
  
  });

  }
  deleteSector(sectors : Sector ) {

    this.sectorservice.deleteSector(sectors.id).subscribe(data => {
 
   this.sectorservice.getAllSector().subscribe(data =>{
 
  this.SectorList =data;});
 
      });
    }
    updateSector( sectors:Sector ) {
      window.localStorage.removeItem("edit-id");

      window.localStorage.setItem("edit-id", sectors.id.toString());
      this.router.navigate(['sector']);
      }

}
