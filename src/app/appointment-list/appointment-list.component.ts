import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }
  // simple two way data binding
  // appointments: Appointment = {
  //   id: 1,
  //   title: 'Go to school',
  //   date: new Date('2023-10-12'),
  // };

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);

      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      // alert(this.appointments.length);

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
