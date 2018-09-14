import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NetPromoterService } from './netpromoter.service';
import { NetPromoterFormComponent } from './netpromoter-form/netpromoter-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RatingComponent } from './rating/rating.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NetPromoterFormComponent,
    FeedbackFormComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NetPromoterService],
  bootstrap: [AppComponent]
})
export class AppModule { }