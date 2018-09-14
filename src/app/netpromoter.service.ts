import { Injectable } from '@angular/core';
import { NetPromoter } from './models/netpromoter';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class NetPromoterService {
  netPromoter: NetPromoter;

  constructor() { 
  }

  run(){
      this.netPromoter = new NetPromoter(false, 0, ""); 
  }

  getNetPromoter(): NetPromoter{
      return this.netPromoter;
  }

  setRating(star: number){
      this.netPromoter = new NetPromoter(false, star, "");
  }

}
