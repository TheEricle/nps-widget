import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NetPromoter } from '../models/netpromoter';
import { NetPromoterService } from '../netpromoter.service'
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './netpromoter-form.component.html',
  styleUrls: ['./netpromoter-form.component.css']
})
export class NetPromoterFormComponent implements OnInit {
  @Input() netpromoter: NetPromoter;
  ctrl = new FormControl(null, Validators.required);
  submitted: boolean=false;
  sub: Subscription;

  constructor(
    public activeModal: NgbActiveModal,
    private netPromoterService: NetPromoterService
    ) {

  }

  ngOnInit() {
    this.ctrl.setValue(this.netpromoter.rating);
    this.sub = this.ctrl.valueChanges.subscribe(value=>{
      console.log(value)
      this.netPromoterService.updateNetPromoter(
        new NetPromoter(this.netpromoter.id, this.netpromoter.disable,value, 
          this.netpromoter.feedback));
      })
    }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
