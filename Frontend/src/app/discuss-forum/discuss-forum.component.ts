import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-discuss-forum',
  templateUrl: './discuss-forum.component.html',
  styleUrls: ['./discuss-forum.component.css']
})
export class DiscussForumComponent implements OnInit {

  constructor(private userService : UserService) { }

  postsData : any ;

  finalPostsData :any = {};


  ngOnInit() {
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
