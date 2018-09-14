import { Component, Input, OnInit } from '@angular/core';
import { NetPromoter } from '../models/netpromoter';
import { Subscription } from 'rxjs/Subscription';
import { NetPromoterService } from '../netpromoter.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'shared-netpromoter-form',
  templateUrl: './netpromoter-form.component.html',
  styleUrls: ['./netpromoter-form.component.css']
})
export class NetPromoterFormComponent implements OnInit {
  sub: Subscription;
  feedback: string;
  rating: number;
  submitted: boolean=false;
  disable: boolean=false;
  netPromoter: NetPromoter = new NetPromoter(false,0,"");

  constructor(
    private netPromoterService: NetPromoterService
      ) { }

  ngOnInit() {
      this.netPromoter = this.netPromoterService.getNetPromoter();
      this.rating = this.netPromoter.rating;
      this.feedback = this.netPromoter.feedback;
  }

  onSubmit(form: NgForm) {
      this.submitted=true;

  }


}
