import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetpromoterInitializationComponent } from './netpromoter-initialization/netpromoter-initialization.component';
import { ErrorComponent } from './error/error.component';
import { NetPromoter } from './models/netpromoter';
import { AppResolve } from './app.resolve';

const routes: Routes = [
    { path: '', component:  NetpromoterInitializationComponent, resolve: {
                netpromoter: AppResolve
            }},
    { path: 'error', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { }