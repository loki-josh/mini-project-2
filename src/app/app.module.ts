import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myRoutings } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './dash-board/header/header.component';
import { FooterComponent } from './dash-board/footer/footer.component';
import { MainBodyComponent } from './dash-board/main-body/main-body.component'
import { RegisterModule } from './authendication/register/register/register.module';


@NgModule({
  declarations: [
    AppComponent,
    myRoutings,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent, ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegisterModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
