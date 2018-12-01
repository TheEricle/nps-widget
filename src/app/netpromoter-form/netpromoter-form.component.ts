import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NetPromoter } from '../models/netpromoter';
import { Subscription } from 'rxjs/Subscription';
import { NetPromoterService } from '../netpromoter.service';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: './netpromoter-form.component.html',
  styleUrls: ['./netpromoter-form.component.css']
})
export class NetPromoterFormComponent implements OnInit {
  sub: Subscription;
  ctrl = new FormControl(null, Validators.required);
  submitted: boolean=false;
  netPromoter: NetPromoter;

  constructor(
    private netPromoterService: NetPromoterService,
    public activeModal: NgbActiveModal
    ) {

  }

  ngOnInit() {
    this.sub = this.netPromoterService.run().subscribe(observer=>
      {
      console.log(observer)
      this.netPromoter = observer;
      this.ctrl.setValue(this.netPromoter.rating);
      });
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
