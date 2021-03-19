import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdt',
  templateUrl: './pdt.component.html',
  styleUrls: ['./pdt.component.css']
})
export class PdtComponent implements OnInit {
  
  pdtId=localStorage.getItem("pdtId");
  url='';

  Title='';
  Price='';
  Img='';
  Size='';
  Colour='';
  disp='Added to cart';
  ifdisp=false;

  constructor(private http:HttpClient) {
    if (this.pdtId.charAt(0)=='m'){this.url="http://127.0.0.1:8000/catalog/men/"}
    if (this.pdtId.charAt(0)=='w'){this.url="http://127.0.0.1:8000/catalog/women/"}
    http.post(this.url,{"opt":this.pdtId}).subscribe((res: any) => {
      // console.log(res);
      this.Title=res["title"];
      this.Price=res["price"];
      this.Img=res["image"];
      this.Size=res["size"];
      this.Colour=res["colour"];

    });

  }
    

  ngOnInit(): void {
  }

  addToCart(){
    this.http.post("http://127.0.0.1:8000/data/cart_add/",{"email":localStorage.getItem("id"),"pdtId":this.pdtId}).subscribe((res:any)=>{
    // console.log(res);
    this.ifdisp=true;
    });
    
  }
}
