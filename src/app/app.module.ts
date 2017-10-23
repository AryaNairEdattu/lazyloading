import { RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';

import { AddprobtnComponent } from './project/addprobtn/addprobtn.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TimecardComponent } from './timecard/timecard.component';
import { HeaderComponent } from './header/header.component';
 
import { TimecardModule }   from './timecard/timecard.module'; 
import { ModuleWithProviders } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    
    
    TimecardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,TimecardModule,
    HttpModule,

    FormsModule,
    RouterModule.forRoot([
       {
         path:'project',
        
        loadChildren: './project/project.module#ProjectModule'
       },
      
      {
       path:'timecard',
       component:TimecardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }