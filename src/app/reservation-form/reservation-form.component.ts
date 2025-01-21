import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {ReservationService} from "../reservation/reservation.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private  activeRoute: ActivatedRoute){

  }


  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', Validators.required],
      roomNumber: ['', Validators.required],



    })
    let id =  this.activeRoute.snapshot.params['id'];

    if(id){
      let reservation = this.reservationService.getReservation(id);
      if(reservation){
        this.reservationForm.patchValue(reservation)
      }

    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
    let reservation = this.reservationForm.value;

      let id = this.activeRoute.snapshot.params['id'];

      if(id){
        reservation.id = id;
        this.reservationService.updateReservation(reservation)
      }
      else {
        this.reservationService.addReservation(reservation)
      }

    }
    this.router.navigate(['/list'])
  }
}
