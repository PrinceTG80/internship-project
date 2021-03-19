import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  carouImgs = ['5140500.jpg','2659676.jpg','11_Success-1.jpg'].map((n:string) => `http://127.0.0.1:8000/static/${n}`);

  constructor(config: NgbCarouselConfig) { 
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
