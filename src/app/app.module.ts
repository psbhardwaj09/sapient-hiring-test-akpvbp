import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CheckBoxContainerComponent } from './components/filters/check-box-container/check-box-container.component';
import { FiltersService } from './services/filters.service';
import { CoreService } from './services/core.service';
import { SharedService } from './services/shared.service';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, FiltersComponent, CheckBoxContainerComponent, DetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FiltersService, CoreService, SharedService]
})
export class AppModule { }
