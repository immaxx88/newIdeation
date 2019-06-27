import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showSuccessMessage : boolean
  serverErrorMessage : string
  constructor(private userService : UserService) { }


  onSubmit(form : NgForm)
  {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=>this.showSuccessMessage = false,2000)
        this.resetForm(form)
      },
      err => {
        if(err.status == 422)
        {
          this.serverErrorMessage = err.error.join('<br>')
        }
        else
        this.serverErrorMessage = "something went wrong "
      }
    )
  }

  resetForm(form: NgForm)
  {
    this.userService.selectedUser = {
      name : '',
      email : '',
      password : '',
      role : ''
    };
    form.resetForm();
  }


  ngOnInit() {
  }

}
