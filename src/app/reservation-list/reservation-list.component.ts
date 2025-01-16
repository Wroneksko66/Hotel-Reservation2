import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservationList: Reservation[] = []

  ngOnInit() {
    this.reservationList = this.reservationService.getReservations();
    console.log(this.reservationList);

  }

  constructor(
    private reservationService: ReservationService) {
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id)
  }

}
