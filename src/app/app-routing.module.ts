import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path : 'auth',
    loadChildren : () => import('./auth/auth.module').then(com => com.AuthModule)
  },
  { 
    path : 'structure',
    loadChildren : () => import('./structural-directives/structural-directives.module').then(com => com.StructuralDirectivesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
