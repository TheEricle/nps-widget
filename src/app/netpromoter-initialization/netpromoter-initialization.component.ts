import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NetPromoterFormComponent } from '../netpromoter-form/netpromoter-form.component';
import { ActivatedRoute } from '@angular/router';
import { NetPromoter } from '../models/netpromoter';

@Component({
    selector: 'shared-netpromoter-initialization',
    template: ''
})
export class NetpromoterInitializationComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal
        ) { 
        setTimeout(() => {
            const componentInstance = this.modalService.open(NetPromoterFormComponent).componentInstance;
            componentInstance.netpromoter = this.route.snapshot.data['netpromoter'];
        }, 5000);
    }

    ngOnInit() {
    }

}
