import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimecardComponent } from './timecard.component';
import{ RouterModule,Routes} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'timecard', 
      component: TimecardComponent }
   ])
  ],
  declarations: []
})
export class TimecardModule { 
  
  
}