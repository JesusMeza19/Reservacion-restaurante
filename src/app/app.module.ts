import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormReserComponent } from './form-reser/form-reser.component';
import { TablesMapComponent } from './tables-map/tables-map.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FoodComponent } from './food/food.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { RPasswordComponent } from './r-password/r-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';
import { CrudComponent } from './crud/crud.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ReservationComponent,
    CalendarComponent,
    FormReserComponent,
    TablesMapComponent,
    MenuComponent,
    LoginComponent,
    AdminComponent,
    FoodComponent,
    SocialmediaComponent,
    RPasswordComponent,
    NewUserComponent,
    ValidEmailComponent,
    CrudComponent,
    CreateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
