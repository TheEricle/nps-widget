import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetPromoter } from '../models/netpromoter';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'shared-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit, OnDestroy {
    @Input() netpromoter: NetPromoter;
    sub: Subscription;
    submitted: boolean=false;
    
    constructor() { }

    ngOnInit() {
        console.log(this.netpromoter)
    }

    onSubmit(form: NgForm) {
        this.submitted=true;
    }

    ngOnDestroy() {
    }

}
