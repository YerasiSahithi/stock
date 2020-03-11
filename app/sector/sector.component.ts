import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private router:Router,private sectorservice:SectorService) { }
  sectors : Sector=new Sector();  
  submitted = false;  

  ngOnInit() {
    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!=""){
   this.sectorservice.findOneInAll1234(parseInt(id))
  
   .subscribe(data => {
    this.sectors=data; this.sectorsaveform.setValue(this.sectors)
  
    });
   }

    this.submitted=false;  

  }
  sectorsaveform=new FormGroup({ 
    id:new FormControl() , 
    sectorName:new FormControl() , 
    brief:new FormControl() , 
  
  });  
  saveSector(saveSector){  
    this.sectors=new Sector ();
    this.sectors.id=this.Id.value;   
    this.sectors.sectorName=this.SectorName.value;  
    this.sectors.brief=this.Brief.value;  

    this.submitted = true;  
    this.save();  
  }  
  save() {

    this.sectorservice.saveSector(this.sectors).subscribe(data => console.log(data), error => console.log(error));

  
    this.sectors = new Sector();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['sectorlist']) 

   }   
   get Id(){  
    return this.sectorsaveform.get('id');  
  }  
  get SectorName(){  
    return this.sectorsaveform.get('sectorName');  
  }  
  get Brief(){  
    return this.sectorsaveform.get('brief');  
  }  
  saveSectorForm(){  
    this.submitted=false;  
    this.sectorsaveform.reset();  
  }  


}
