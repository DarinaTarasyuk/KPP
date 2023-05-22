import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablepageDbPage } from './observablepage-db.page';

const routes: Routes = [
  {
    path: '',
    component: ObservablepageDbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablepageDbPageRoutingModule {}
