import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CrudComponent } from './crud/crud.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RPasswordComponent } from './r-password/r-password.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about_us', component: AboutusComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'food', component: FoodComponent},
  {path: 'recover_password', component: RPasswordComponent},
  {path: 'register', component: NewUserComponent},
  {path: 'valid_email', component: ValidEmailComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'update', component: CreateReservationComponent},
  {path: 'new', component: CreateReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
