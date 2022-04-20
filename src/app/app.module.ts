import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RepeaterModule} from "./components/repeater/repeater.module";
import {DummyService} from "./services/dummy.service";
import {CustomSortPipe} from './pipes/custom-sort.pipe';
import {ListComponent} from './list/list.component';
import {ListSortingComponent} from './list-sorting/list-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSortPipe,
    ListComponent,
    ListSortingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RepeaterModule
    ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
