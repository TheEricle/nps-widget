import { Injectable } from '@angular/core';
import { NetPromoter } from './models/netpromoter';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
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

  updateNetPromoter(netpromoter: NetPromoter): Observable<NetPromoter>{
    let params = new HttpParams();
    params = params.set("id", netpromoter.id.toString());
    params = params.set("rating", netpromoter.rating.toString());
    params = params.set("feedback", netpromoter.feedback.toString());
    params = params.set("disable", netpromoter.disable.toString());
    let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');

    let options = {
            params: params,
            headers: headers
        }

    let new_netpromoter = this.httpClient.post(this.netpromoterUrl, null, options)
    return new_netpromoter.pipe(map(mapNetpromoter));
  }
}

function mapNetpromoter(response: any): NetPromoter {
      let id = response.body.id
      let disable = response.body.disable
      let rating = response.body.rating
      let feedback = response.body.feedback
      let netpromoter = new NetPromoter(id, disable, rating, feedback);
    return netpromoter;
}
