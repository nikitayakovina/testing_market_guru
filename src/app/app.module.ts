import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from "ngx-pagination";
import { FetchDataService } from "./services/fetch-data.service";
import { TableComponent } from './components/table/table.component';
import {NgxsModule} from "@ngxs/store";
import {ReceivedDataState} from "./state/recevied-data-state";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxsModule.forRoot([ReceivedDataState]),
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
