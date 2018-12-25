import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NetPromoterService } from './netpromoter.service';
import { NetPromoter } from './models/netpromoter';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';

/** AppResolve represents a value that resolves to a netpromoter. 
 *  If an error occurs while getting the netpromoter,
 *  the router will instead redirect to the error view.
 */
@Injectable()
export class AppResolve implements Resolve<NetPromoter> {

    constructor(
        private netPromoterService: NetPromoterService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<NetPromoter> {
        return this.netPromoterService.run().catch(error => {
            this.router.navigate(['/error']);
            console.log(error);
            return Observable.of(null);
        });
    }
}