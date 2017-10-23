import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import{ RouterModule,Routes} from '@angular/router';
import { AddprobtnComponent } from './addprobtn/addprobtn.component';


@NgModule({
  imports: [
    CommonModule,
  RouterModule.forChild([
      { path: '',
      component: ProjectComponent },
      {
        path:'addprobtn',
        component:AddprobtnComponent
      }
   ])
  ],

  declarations: [ProjectComponent,AddprobtnComponent  ]
})
export class ProjectModule {


  
 }
