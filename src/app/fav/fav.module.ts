import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavPageRoutingModule } from './fav-routing.module';

import { FavPage } from './fav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FavPage]
})
export class FavPageModule { }
