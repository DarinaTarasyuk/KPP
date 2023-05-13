import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablepagePage } from './observablepage.page';

const routes: Routes = [
  {
    path: '',
    component: ObservablepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablepagePageRoutingModule {}
