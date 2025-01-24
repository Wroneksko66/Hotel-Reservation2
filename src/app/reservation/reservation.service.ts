import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private apiUrl = "http://localhost:3001"

  constructor(private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations")
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id)
  }

  addReservation(reservation: Reservation):Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation)
  }

  deleteReservation(id: string) {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id)
  }

  updateReservation(id:string,update:Reservation):Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, update)
  }


}
