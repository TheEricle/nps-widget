import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NetPromoter } from '../models/netpromoter';
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

  constructor(
    public activeModal: NgbActiveModal,
    ) {

  }

  ngOnInit() {
    console.log(this.netpromoter);
  }

  ngOnDestroy(){
  }
}
