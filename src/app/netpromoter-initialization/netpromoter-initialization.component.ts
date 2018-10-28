import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NetPromoterFormComponent } from '../netpromoter-form/netpromoter-form.component';


@Component({
    selector: 'shared-netpromoter-initialization',
    template: ''
})
export class NetpromoterInitializationComponent implements OnInit {

    constructor(
        private modalService: NgbModal
        ) { 
        setTimeout(() => {
            this.modalService.open(NetPromoterFormComponent);
        }, 30000);
    }

    ngOnInit() {
    }

}
