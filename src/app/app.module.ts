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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NGRX_IMPORTS } from './ngrx-imports';
import { CoolSvgComponent } from './common/cool-svg/cool-svg.component';
import { GenericDialogComponent } from './common/generic-dialog/generic-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpFormComponent } from './common/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AppNavComponent,
    CoolSvgComponent,
    GenericDialogComponent,
    SignUpFormComponent,
  ],
  imports: [
    //internal 
    WrappersModule,
    DirectivesModule,
    //external
    ...NGRX_IMPORTS,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
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
