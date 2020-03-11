import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
 import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedFiles: any;
  

  constructor(private router:Router,private userservice:UserService) { }
  user : User=new User();  
  submitted = false;  

  ngOnInit() {
    var id=window.localStorage.getItem("edit-id");
    if(id!=null&&id!=""){
   this.userservice.findOneInAll(parseInt(id))
  
   .subscribe(data => {
    this.user=data; this.usersaveform.setValue(this.user)
  
  
  
    });
  
  
  
   }

  this.submitted = false;

 }
 selectFile(event) {

  const file = event.target.files.item(0);



  if (file.type.match('image.*')) {

   var size = event.target.files[0].size;

   if(size > 1000000)

   {

     alert("size must not exceeds 1 MB");

     this.usersaveform.get('profileImage').setValue("");

   }

   else

   {

    this.selectedFiles = event.target.files;

   }

  } else {

   alert('invalid format!');

  }



 }

  
  usersaveform=new FormGroup({ 
    userType:new FormControl() , 
    id:new FormControl('',[Validators.required , Validators.minLength(5) ]) , 
    userName:new FormControl('',[Validators.required , Validators.minLength(5) ]) , 
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    confirmed:new FormControl(),  
  profileImage:new FormControl()
  });  
  saveUser(saveUser){  
    this.user=new User();
    this.user.id=this.UId.value;   
    this.user.userName=this.UserName.value;  
    this.user.userType=this.UserType.value;  
    this.user.password=this.Password.value; 
    this.user.email=this.Email.value; 
    this.user.phone=this.Phone.value; 
    this.user.confirmed="no"; 
    this.user.profileImage=this.ProfileImage.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {
    this.userservice.saveUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['signup']);  
  }
  get UserType(){  
    return this.usersaveform.get('userType');  
  }  

  get UId(){  
    return this.usersaveform.get('id');  
  }  
  get UserName(){  
    return this.usersaveform.get('userName');  
  }  

  get Password(){  
    return this.usersaveform.get('password');  
  }  
  get Email(){  
    return this.usersaveform.get('email');  
  }  

  get Phone(){  
    return this.usersaveform.get('phone');  
  }  


 get Confirmed(){  
    return this.usersaveform.get('confirmed');  
  } 
  get ProfileImage(){  
    return this.usersaveform.get('profileImage');  
  } 

  saveUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  }  

}
