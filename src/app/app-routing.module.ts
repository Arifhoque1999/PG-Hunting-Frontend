import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { CreatePostComponent } from './Component/create-post/create-post.component';
import { UserSignUpComponent } from './auth/user-sign-up/user-sign-up.component';
import { OurServiceComponent } from './Component/our-service/our-service.component';
import { BookflatComponent } from './Component/bookflat/bookflat.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { PageLoaderComponent } from './Component/page-loader/page-loader.component';
import { FooterPageComponent } from './Component/footer-page/footer-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'post-pg', component: CreatePostComponent },
  { path: 'registration', component: UserSignUpComponent },
  { path: 'our-service', component: OurServiceComponent },
  { path: 'book-flat', component: BookflatComponent },
  { path: 'v5', component: UserLoginComponent },
  { path: 'v6', component: AdminDashboardComponent },
  {path:'v7',component:FooterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
