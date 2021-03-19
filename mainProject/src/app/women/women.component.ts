import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  ngOnInit(): void {
  }

  cardsContent=[];


  // logged:string =this.loggedUser.logged;
  

  constructor(private http: HttpClient ){
      http.post('http://127.0.0.1:8000/catalog/women/',{"opt":"zzz"}).subscribe((res: any) => {
        // console.log(res);
  
        for (let catalogI of res["catalogue"]){
          // console.log(catalogI.description)
          // console.log(catalogI.title, catalogI.icon, 'catalog');
  
          // .push is like appending the cardsContent array
          this.cardsContent.push({
  
            cardTitle: catalogI.title,
            cardImage: catalogI.image,
            cardValue: catalogI.price,
            cardId:catalogI.id,
  
          });
        }
      });  

  
  };
  
}
