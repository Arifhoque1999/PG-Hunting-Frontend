import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { UserPostComponent } from './Component/user-post/user-post.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserSignUpComponent } from './auth/user-sign-up/user-sign-up.component';
import { NgprimeModule } from './ngprime.module';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterPageComponent } from './Component/footer-page/footer-page.component';
import { UserSearchComponent } from './Component/user-search/user-search.component';
import { CreatePostComponent } from './Component/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OurServiceComponent } from './Component/our-service/our-service.component';
import { BookflatComponent } from './Component/bookflat/bookflat.component';
import { BookingFormComponent } from './Component/booking-form/booking-form.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { PageLoaderComponent } from './Component/page-loader/page-loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPostComponent,
    UserLoginComponent,
    UserSignUpComponent,
    NavbarComponent,
    FooterPageComponent,
    UserSearchComponent,
    CreatePostComponent,
    BookflatComponent,
    OurServiceComponent,
    BookingFormComponent,
    AdminDashboardComponent,
    PageLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgprimeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NgprimeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
