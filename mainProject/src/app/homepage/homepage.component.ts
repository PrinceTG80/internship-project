import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent implements OnInit {



  ngOnInit(): void {
  }

  cardsContent=[];

  // logged:string =this.loggedUser.logged;
  

  constructor(private http: HttpClient /*,private loggedUser:LoggedInService*/ ){

    http.get('https://www.autonise.com/api/users/getCatalog').subscribe((res: any) => {
      // console.log(res);

      for (let catalogI of res.catalog){
        // console.log(catalogI.description)
        // console.log(catalogI.title, catalogI.icon, 'catalog');

        // .push is like appending the cardsContent array
        this.cardsContent.push({
          cardWriteup: catalogI.description,
          cardTitle: catalogI.title,
          cardImage: 'https://www.autonise.com'+ catalogI.icon,
          // cardImage: '/assets/original_01.jpg',
          // we can put anything inside assets and call it here by using /assets
          cardValue: catalogI.cost,
          cardOldValue: catalogI.trueCost
        });
      }
    });  

  
  };
  

}
