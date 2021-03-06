import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetPromoterService } from './netpromoter.service';
import { NetPromoterFormComponent } from './netpromoter-form/netpromoter-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AppComponent } from './app.component';
import { InMemoryService } from './inmemory.service';
import { environment } from '../environments/environment';
import { NetpromoterInitializationComponent } from './netpromoter-initialization/netpromoter-initialization.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ErrorComponent } from './error/error.component';
import { AppResolve } from './app.resolve';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NetPromoterFormComponent,
    FeedbackFormComponent,
    NetpromoterInitializationComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryService)
  ],
  providers: [NetPromoterService, NgbActiveModal, NgbModal, AppResolve],
  bootstrap: [AppComponent],
  entryComponents: [NetPromoterFormComponent]
})
export class AppModule { }