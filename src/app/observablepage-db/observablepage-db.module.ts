import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepageDbPageRoutingModule } from './observablepage-db-routing.module';

import { ObservablepageDbPage } from './observablepage-db.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepageDbPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ObservablepageDbPage]
})
export class ObservablepageDbPageModule {}
