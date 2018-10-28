import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetPromoterService } from './netpromoter.service';
import { NetPromoterFormComponent } from './netpromoter-form/netpromoter-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RatingComponent } from './rating/rating.component';
import { AppComponent } from './app.component';
import { NetpromoterInitializationComponent } from './netpromoter-initialization/netpromoter-initialization.component';

@NgModule({
  declarations: [
    AppComponent,
    NetPromoterFormComponent,
    FeedbackFormComponent,
    RatingComponent,
    NetpromoterInitializationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NetPromoterService, NgbActiveModal, NgbModal],
  bootstrap: [AppComponent, NetPromoterFormComponent]
})
export class AppModule { }