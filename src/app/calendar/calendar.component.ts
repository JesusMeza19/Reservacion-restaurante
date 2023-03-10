import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  @ViewChild('calendar') calendar: ElementRef;
  @ViewChild('date') date: ElementRef;
  @ViewChild('daysContainer') daysContainer: ElementRef;
  @ViewChild('prev') prev: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('todayBtn') todayBtn: ElementRef;
  @ViewChild('gotoBtn') gotoBtn: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;
  @ViewChild('eventDay') eventDay: ElementRef;
  @ViewChild('eventDate') eventDate: ElementRef;
  @ViewChild('eventsContainer') eventsContainer: ElementRef;
  @ViewChild('addEventBtn') addEventBtn: ElementRef;
  @ViewChild('addEventWrapper') addEventWrapper: ElementRef;
  @ViewChild('addEventCloseBtn') addEventCloseBtn: ElementRef;
  @ViewChild('addEventTitle') addEventTitle: ElementRef;
  @ViewChild('addEventFrom') addEventFrom: ElementRef;
  @ViewChild('addEventTo') addEventTo: ElementRef;
  @ViewChild('addEventSubmit') addEventSubmit: ElementRef;

  today: Date = new Date();
  activeDay: number;
  month: number = this.today.getMonth();
  year: number = this.today.getFullYear();
  months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  eventsArr: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.showCalendar();
  }

  showCalendar() {
    // Implementar el código del método showCalendar() aquí, utilizando las propiedades y los métodos que hayas creado.
  }

  addEvent() {
    // Implementar el código del método addEvent() aquí, utilizando las propiedades y los métodos
}
