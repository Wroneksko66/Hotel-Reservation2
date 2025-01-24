import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservationList: Reservation[] = []

  ngOnInit() {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservationList = reservations;
    })

  }

  constructor(
    private reservationService: ReservationService) {
  }


  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Reservation deleted successfully");
    })
  }
}
