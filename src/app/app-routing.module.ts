import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"online-payment",
    component: OnlinepaymentComponent
  },
  {
    path: '**',
    redirectTo: '', // Redirect to HomeComponent
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
