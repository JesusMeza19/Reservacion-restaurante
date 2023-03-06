import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { FoodComponent } from './food/food.component';
import { FormReserComponent } from './form-reser/form-reser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about_us', component: AboutusComponent},
  {path: 'reservations', component: FormReserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LogoutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'food', component: FoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
