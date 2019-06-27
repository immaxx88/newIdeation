import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  constructor(private userService : UserService,private route : ActivatedRoute) { }


  name : ''

  onSubmit(form : NgForm)
  {
    this.userService.postDataValues(form.value).subscribe(
      res =>
      {
       console.log(res)
      },
      err =>
    {
      console.log("Error Encountered")
    })
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => 
      {
        this.name = params['id'];
        console.log(this.name)
      //  console.log(this.author)
      this.userService.postData.name= this.name;
    },
    err => 
    {
      console.log('paramter not found')
    })
  }
}
