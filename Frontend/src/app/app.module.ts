import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserPostComponent } from './user-post/user-post.component';
import { DiscussForumComponent } from './discuss-forum/discuss-forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    UserPostComponent,
    DiscussForumComponent,
    NavbarComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
