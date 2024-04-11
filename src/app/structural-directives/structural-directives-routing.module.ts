import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

const routes: Routes = [
  { 
    path : 'ngif',
    component: NgIfComponent
  },
  { 
    path: 'ngfor',
    component: NgForComponent
  },
  { 
    path: 'ngswitch',
    component: NgSwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectivesRoutingModule { }
