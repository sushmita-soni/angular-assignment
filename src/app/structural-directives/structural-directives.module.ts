import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectivesRoutingModule } from './structural-directives-routing.module';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { SubForComponent } from './sub-for/sub-for.component';


@NgModule({
  declarations: [
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    SubForComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectivesRoutingModule
  ]
})
export class StructuralDirectivesModule { }
