import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
  {
    path: 'abstract-class',
    loadChildren: () => import('./abstract-class/abstract-class.module').then( m => m.AbstractClassPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  {
    path: 'interfacepage',
    loadChildren: () => import('./interfacepage/interfacepage.module').then( m => m.InterfacepagePageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./servicepage/servicepage.module').then( m => m.ServicepagePageModule)
  },
  {
    path: 'formspage',
    loadChildren: () => import('./formspage/formspage.module').then( m => m.FormspagePageModule)
  },
  {
    path: 'observablepage',
    loadChildren: () => import('./observablepage/observablepage.module').then( m => m.ObservablepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
