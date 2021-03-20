import { HttpClient} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http:HttpClient , private route: Router) { }

  ngOnInit(): void {
  }

  inEmail ='';
  inPswd ='';
  inUserName='';
  inNum :string;
  emailValid:boolean =true ;
  pswdValid:boolean = false;
  pswdDisp='';
  emdisp='';
  
  postUser={};

  signUp(ele){
    // let changeBtn:any = (ele.children)[2];
    // changeBtn.classList.remove('btn-light');
    // changeBtn.classList.add('btn-success');
    // changeBtn.innerHTML="Let's Go";
    //all above this is to change the button to greeen and let's go

    //console.log(ele.children);

    this.emdisp=(ele.children)[1].validationMessage;
    this.emailValid =(ele.children)[1].validity.valid;


    // console.log('entered email is:',this.inEmail);
    // console.log('entered password is:',this.inPswd);
    // console.log('entered number is:',this.inNum);

    if((this.inPswd).length >=8 ){
      this.pswdValid=true;
      this.pswdDisp='';
    }else{
      this.pswdDisp="Invalid Password. It should be atleast 8 Characters long";
    }

    this.postUser={

      "dat":{"email":this.inEmail,
              "pswd":this.inPswd,
              "mobNum":this.inNum,
              "username":this.inUserName,
            }
    };

    

    if ( (ele.children)[1].validity.valid==true && this.pswdValid==true ) {
      
      this.http.post('http://127.0.0.1:8000/data/reg/', this.postUser).subscribe( (res:any) =>{
      console.log(res['regStatus']);
      if (res['regStatus'] == "success"){
        this.route.navigate(['/home'])
       }
      }
      );

    };

  }

}