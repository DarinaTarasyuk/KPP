import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstractClassPage } from './abstract-class.page';

const routes: Routes = [
  {
    path: '',
    component: AbstractClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractClassPageRoutingModule {}
