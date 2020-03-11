import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { Observable } from 'rxjs';

import { User } from '../user';

import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({

 selector: 'app-login',

 templateUrl: './login.component.html',

 styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {



 user :User;
  submitted: boolean;

 constructor(private router: Router, private userservice:UserService) { }




 ngOnInit() {


 }



 usersaveform = new FormGroup({

  userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

  password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),



 })
 get UserName(){  
  return this.usersaveform.get('userName');  
}  

get Password(){  
  return this.usersaveform.get('password');  
}  


 findByUserNameAndPassword(findByUserNameAndPassword) {

  this.user = new User();

  this.user.userName = this.usersaveform.get('userName').value;

  this.user.password = this.usersaveform.get('password').value;

  this.submitted = true;
  alert( this.user.userName+" "+this.user.password);
  this.userservice.findByUserNameAndPassword(this.user.userName, this.user.password).subscribe(data =>{

   this.user=data;

   if(this.user!=null && this.user.userType=='admin'){

    this.router.navigate(['/admin']);
   }


  else if(this.user!=null && this.user.userType=='user'){

    this.router.navigate(['/user']);
   }
   else{

    this.router.navigate(['/login']);
  }
  
  // error => console.log(console.error()));
});

 }

}
