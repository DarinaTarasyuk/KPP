import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormspagePageRoutingModule } from './formspage-routing.module';

import { FormspagePage } from './formspage.page';

import { ReactiveFormsModule } from '@angular/forms';

import { MyHeaderModule } from '../my-header/my-header.component.module';

import { MyFormComponent } from '../my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormspagePageRoutingModule,
    ReactiveFormsModule, 
    MyHeaderModule,
    
  ],
  declarations: [FormspagePage,MyFormComponent]
})
export class FormspagePageModule {}
