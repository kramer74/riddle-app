import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { RiddleComponent } from './riddle/riddle.components';
import { RiddleService  } from './shared/riddle.service';

@NgModule({
  declarations: [
    AppComponent,
    RiddleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RiddleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
