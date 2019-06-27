import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = 
  {
    name : '',
    email : '',
    password : '',
    role : ''
  }

  postData: Post = 
  {
    name : '',
    topicname : '',
    description : ''
  }
  
  isUserLoggedIn : boolean

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user)
  }
  loginUser(authenticatedValues)
  {
    return this.http.post(environment.apiBaseUrl+'/authenticate',authenticatedValues)
  }
  getUser(val)
  {
    return this.http.post(environment.apiBaseUrl+'/userprofile',val) 
  }

  getPostsData()
  {
    return this.http.get(environment.apiBaseUrl+'/allposts')
  }

  postDataValues(post : Post)
  {
    return this.http.post(environment.apiBaseUrl+'/addpost',post)
  }

  constructor(private http: HttpClient) { }
}
