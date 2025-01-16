import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let saveReservation = localStorage.getItem('reservations');
    this.reservations = saveReservation? JSON.parse(saveReservation) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation)
    localStorage.setItem('reservations', JSON.stringify(this.reservations))

  }

  deleteReservation(id: string) {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index, 1)
  }

  updateReservation(updateReservation: Reservation) {
    let index = this.reservations.findIndex(res => res.id === updateReservation.id)
    this.reservations[index] = updateReservation
  }


}
