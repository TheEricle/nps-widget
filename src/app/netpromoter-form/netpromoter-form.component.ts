import { Component, Input, OnInit } from '@angular/core';
import { NetPromoter } from '../models/netpromoter';
import { Subscription } from 'rxjs/Subscription';
import { NetPromoterService } from '../netpromoter.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'shared-netpromoter-form',
  templateUrl: './netpromoter-form.component.html',
  styleUrls: ['./netpromoter-form.component.css']
})
export class NetPromoterFormComponent implements OnInit {
  sub: Subscription;
  ctrl = new FormControl(null, Validators.required);
  feedback: string;
  submitted: boolean=false;
  disable: boolean=false;
  netPromoter: NetPromoter = new NetPromoter(false,null,"");

  constructor(
    private netPromoterService: NetPromoterService
      ) { }

  ngOnInit() {
   //   this.netPromoter = this.netPromoterService.getNetPromoter();
      this.ctrl.setValue(this.netPromoter.rating);
      this.feedback = this.netPromoter.feedback;
  }



}
