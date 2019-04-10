import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategorysComponent } from './moudle/categorys/categorys.component';
import { DetailsComponent } from './moudle/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatnewComponent } from './moudle/creatnew/creatnew.component';
import { ModalModule } from 'angular-custom-modal';
import { MaterialModule } from './meterial';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    CategorysComponent,
    DetailsComponent,
    CreatnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
