import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FondoComponent } from './fondo/fondo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormReserComponent } from './form-reser/form-reser.component';
import { TablesMapComponent } from './tables-map/tables-map.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FondoComponent,
    AboutusComponent,
    ContactComponent,
    ReservationComponent,
    CalendarComponent,
    FormReserComponent,
    TablesMapComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
