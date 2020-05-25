import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule, } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormComponent } from './form/form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { WrappersModule } from 'src/wrappers/wrappers.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AppNavComponent,
  ],
  imports: [
    //internal 
    WrappersModule,
    DirectivesModule,
    //external
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
