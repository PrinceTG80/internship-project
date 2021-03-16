import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient ,private route:Router , private loggedUser:LoggedInService ) { }

  ngOnInit(): void {}

  inEmail='';
  inPswd='';
  emailValid:boolean =true ;
  loginValid:boolean =true;
  emdisp='';

  postUser={};

  signMeIn(ele){
    // let changeBtn:any = (ele.children)[2];
    // changeBtn.classList.remove('btn-light');
    // changeBtn.classList.add('btn-success');
    // changeBtn.innerHTML="Let's Go";
    //all above this is to change the button to greeen and let's go

    //console.log(ele.children);
    

    this.emdisp=(ele.children)[0].validationMessage;
    this.emailValid =(ele.children)[0].validity.valid;

    // console.log('entered email is:',(ele.children)[0].value);
    // console.log('entered password is:',(ele.children)[4].value);
    // console.log('entered email is:',this.inEmail);
    // console.log('entered password is:',this.inPswd);

    this.postUser={

      "dat":{"email":this.inEmail,
              "pswd":this.inPswd
              
            }
    };

    

    this.http.post('http://127.0.0.1:8000/data/log_in/', this.postUser).subscribe((res:any) =>{
      console.log(res);
      if (res['logStatus'] == true){

        this.loggedUser.loguserin(res['id']);
        // It should always be adding to loguser first and then refresh

        this.route.navigateByUrl('/home');
        

      }else{this.loginValid=false;}
    }
    );

  }

  refresh(){
    location.reload();
    
  }

}
