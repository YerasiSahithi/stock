import { Component, OnInit } from '@angular/core';
import { UpdateIpoService } from '../update-ipo.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UpdateIpo } from '../update-ipo';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  constructor(private router:Router,private updateiposervice:UpdateIpoService) { }
  IPOList:Observable<any[]>

  ngOnInit() {
    this.updateiposervice.getAllIPO().subscribe(data =>{  
      this.IPOList =data;  
  
  })

  }
  deleteIPO(ipo : UpdateIpo ) {

    this.updateiposervice.deleteIPO(ipo.id).subscribe(data => {
      this.updateiposervice.getAllIPO().subscribe(data =>{
 
        this.IPOList =data;});
      });
    }
    updateIPO(ipo : UpdateIpo ) {
      window.localStorage.removeItem("edit-id");

      window.localStorage.setItem("edit-id", ipo.id.toString());
      this.router.navigate(['update-ipo']);

  }

}
