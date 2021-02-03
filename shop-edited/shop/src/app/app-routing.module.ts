import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent} from './login/login.component';
import { OrderHistoryComponent} from './order-history/order-history.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "payment", component: PaymentComponent},
  { path: "login", component: LoginComponent},
  { path: "order-history", component: OrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
