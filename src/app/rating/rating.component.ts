import { Component, OnInit, Input } from '@angular/core';
import { NetPromoterService } from '../netpromoter.service';

@Component({
  selector: 'shared-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() star: number;
  @Input() rating: number;
  constructor(
    private netPromoterService: NetPromoterService
    ) { }

  ngOnInit() {
  }

  setRating(star: number){
      this.rating=this.star;
      this.netPromoterService.setRating(star);
  }

}
