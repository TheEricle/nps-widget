import { Injectable } from '@angular/core';
import { NetPromoter } from './models/netpromoter';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

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
      let netPromoterMapping = netPromoterObservable.pipe(map(mapNetpromoter)); // or any other operator
      return netPromoterMapping;
  }
/**
  getNetPromoter(): NetPromoter{
      return this.netPromoter;
  }
    **/

  setRating(star: number){
      
  }


}

function mapNetpromoter(response: any): NetPromoter {
      let disable = response.body.disable
      let rating = response.body.rating
      let feedback = response.body.feedback
      let netpromoter = new NetPromoter(disable,rating, feedback);
    return netpromoter;
}
