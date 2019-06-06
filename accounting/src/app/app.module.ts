import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserFormComponent } from './components/user-form/user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './layouts/signup/signup.component';
import { EditUserComponent } from './layouts/edit-user/edit-user.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserFormComponent,
    SignupComponent,
    EditUserComponent,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
