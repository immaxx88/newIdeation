import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discuss-forum',
  templateUrl: './discuss-forum.component.html',
  styleUrls: ['./discuss-forum.component.css']
})
export class DiscussForumComponent implements OnInit {

  constructor(private userService : UserService,private route : ActivatedRoute) { }

  postsData : any ;

  finalPostsData :any = {};

  name : string;


  ngOnInit() {

    //getting parameters
    this.route.params.subscribe(
      params => 
      {
        this.name = params['id'];
        console.log(this.name)
      //  console.log(this.author)
    },
    err => 
    {
      console.log('paramter not found')
    })

    //getting posts
    this.userService.getPostsData().subscribe(
      res => {
        this.postsData = res;
       // let map = new Map();
        //map.set()
        console.log(this.postsData)
      },
      err =>
      {
        console.log('Error Encountered')
      }
   
    ) 


  }

}
