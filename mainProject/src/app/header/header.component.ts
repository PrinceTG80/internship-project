import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  linksForHeader=[{link:'/login',title:'Login'}, {link:'/signup',title:'Sign Up'}  ];

  constructor(private loggedUser:LoggedInService) { }



  logout(){  // yet to write
    console.log("logout clicked");
    this.loggedUser.loguserout();

  }
}
