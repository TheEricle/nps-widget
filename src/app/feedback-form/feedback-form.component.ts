import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetPromoter } from '../models/netpromoter';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'shared-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
    @Input() netpromoter: NetPromoter;
    sub: Subscription;
    feedback: string="";
    submitted: boolean=false;
    

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.submitted=true;
    }

}
