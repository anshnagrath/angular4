import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ViewserviceService} from './viewservice.service'
import { AppComponent } from './app.component';
import { View1Component } from '../app/view1/view1.component';
import { View2Component } from './view2/view2.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'view1',component:View1Component},
      {path:'view2',component:View2Component},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'view1',pathMatch:'full'},
      {path:'**',component:View1Component}
    ])
  ],
  providers: [ViewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
