import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './products/product-list.component'

import { AppComponent } from './app.component';
import {ProductFilterPipe} from './products/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
      ProductListComponent,
       ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
