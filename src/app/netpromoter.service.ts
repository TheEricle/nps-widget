import { Injectable } from '@angular/core';
import { NetPromoter } from './models/netpromoter';
import { Observable } from "rxjs/Rx";
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { map, filter, catchError, tap, mergeMap } from 'rxjs/operators';

@Injectable()
export class NetPromoterService {
  private netpromoterUrl = environment.netpromoterUrl;
  constructor(private httpClient: HttpClient) { 
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    return headers;
  }

  run(): Observable<NetPromoter> {
    let netPromoterObservable = this.httpClient.get(this.netpromoterUrl, {
            observe: 'response'
        });
    console.log("Running Service.")
    return netPromoterObservable.pipe(map(mapNetpromoter));
    }
/**
  getNetPromoter(): NetPromoter{
      return this.netPromoter;
  }
  **/

  updateNetPromoter(netpromoter: NetPromoter){
    let new_netpromoter = this.httpClient.put<NetPromoter>(this.netpromoterUrl, netpromoter, { observe: "response", 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    return new_netpromoter.pipe(catchError(this.handleError));
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}

function mapNetpromoter(response: HttpResponse<NetPromoter>): NetPromoter {
    console.log(response);
      let id = response.body.id
      let disable = response.body.disable
      let rating = response.body.rating
      let feedback = response.body.feedback
      let netpromoter = new NetPromoter(id, disable, rating, feedback);
    return netpromoter;
}
