import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {
  
  Tname='';
  Tnum='';
  Tmail='';

  constructor(private http:HttpClient ,private route:Router /*, private loggedUser:LoggedInService*/ ) { 
    this.http.post('http://127.0.0.1:8000/data/read_profile/', {"email":localStorage.getItem("id")}).subscribe((res:any) =>{
      //console.log(res);

      let k=res["profile"];
      this.Tname=k["username"];
      this.Tnum=k["mobNum"];
      this.Tmail=k["email"]
    }
    );
  }

  ngOnInit(): void {}


}
