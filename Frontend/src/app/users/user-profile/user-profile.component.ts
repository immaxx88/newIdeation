import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute, private userService : UserService, private router : Router) { }

  id: string;
  author : string;

  model =
  {
    name : '',
    role : ''
  }

  onSubmit()
  {
    this.router.navigate(['/addpost',this.author])
  }

  ngOnInit() {
        this.route.params.subscribe(
          params => 
          {
            this.id = params['id'];
            this.author = params['id2'];
            console.log(this.id)
            console.log(this.author)
        },
        err => 
        {
          console.log('paramter not found')
        })
      var obj={
        _id: this.id
      }
      this.userService.getUser(obj).subscribe(
        res => {
          let x = res['user']
          this.model.name = x['name']
          this.model.role = x['role']
        },
        err => 
        {
          console.log('Some Error in Retrieving Object')
        }
      )}
}
