import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './components/offer-list/offer-list.component';

const offersRoutes : Routes =[
  {
    path:'',
    component: OfferListComponent,
    data: {title:'Offers Page'}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(offersRoutes)
  ]
})
export class OffersRoutingModule { }
