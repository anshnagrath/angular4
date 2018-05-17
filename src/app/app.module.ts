import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ViewserviceService} from './viewservice.service'
import { AppComponent } from './app.component';
import { View1Component } from '../app/view1/view1.component';
import { View2Component } from './view2/view2.component';
import { AboutComponent } from './about/about.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SelectModule} from 'ng2-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    SelectModule,
    RouterModule.forRoot([
      {path:'view1',component:View1Component},
      {path:'view2/:id',component:View2Component},
       {path:'view2',component:View2Component},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'view1',pathMatch:'full'},
      {path:'**',component:View1Component}
    ])
  ],
  providers: [ViewserviceService,View2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
