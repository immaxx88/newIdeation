import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserPostComponent } from './user-post/user-post.component';
import { DiscussForumComponent } from './discuss-forum/discuss-forum.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [

  {
    path : 'signup', component : UsersComponent,
    children : [{path: '' ,component :SignupComponent}]
  },
  {
    path :'login', component : UsersComponent,
    children : [{path: '',component : LoginComponent}]
  },
  {
    //path : 'userprofile',component: UserProfileComponent
    path : 'userprofile/:id/:id2',component: UserProfileComponent
  },
  {
    path : 'addpost/:id',component : UserPostComponent
  },
  {
    path : 'allposts' , component : DiscussForumComponent
  },
  {
    path : 'logout' , component : LogoutComponent
  },
  {
    path : '', component : LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
