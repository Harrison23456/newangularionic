import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./scan-nuevo/scan-nuevo.module').then( m => m.ScanNuevoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'consulta-dni',
    canActivate: [authGuard],
    loadChildren: () => import('./consulta-dni/consulta-dni.module').then( m => m.ConsultaDniPageModule)
  },
  {
    path: 'dni-details',
    canActivate: [authGuard],
    loadChildren: () => import('./dni-details/dni-details.module').then( m => m.DniDetailsPageModule)
  },
  {
    path: 'scanbar',
    loadChildren: () => import('./scanbar/scanbar.module').then( m => m.ScanbarPageModule)
  },
  {
    path: 'scan-nuevo',
    loadChildren: () => import('./scan-nuevo/scan-nuevo.module').then( m => m.ScanNuevoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
