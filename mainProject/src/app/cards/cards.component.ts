import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardTitle: string ;
  @Input() cardWriteup: string ;
  @Input() cardImage: string ;
  @Input() cardId: string ;//----added

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  show(){
    localStorage.setItem('pdtId',this.cardId);

    this.route.navigate(['/product']);
    
  }

}
