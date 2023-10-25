import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
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
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
