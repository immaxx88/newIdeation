import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService,private router : Router) { }

  model = {
    email : "",
    password : ""
  }



  serverErrorMessages : ''

  //id : number;


  onSubmit(form : NgForm)
  {
    this.userService.loginUser(form.value).subscribe(
      res => 
      {
        //this.userService.isUserLoggedIn = true;
        localStorage.setItem('flag','true');
        let x = res['_id']
        let y = res['name']
        //console.log(x);
        //this.router.navigateByUrl('/userprofile')
       this.router.navigate(['/userprofile',x,y])
      },
      err => 
      {
        this.serverErrorMessages = err.error.message
      }
    )
  }

  ngOnInit() {
  }

}
