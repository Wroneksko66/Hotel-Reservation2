import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationFormComponent} from '../reservation-form/reservation-form.component';
import {ReservationListComponent} from '../reservation-list/reservation-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HomeModule} from "../home/home.module";


@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    HomeModule,
  ]
})
export class ReservationModule {
}
