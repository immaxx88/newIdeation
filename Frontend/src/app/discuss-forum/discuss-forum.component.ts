import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-discuss-forum',
  templateUrl: './discuss-forum.component.html',
  styleUrls: ['./discuss-forum.component.css']
})
export class DiscussForumComponent implements OnInit {

  constructor(private userService : UserService,private route : ActivatedRoute,private http: HttpClient) { }

  postsData : any ;

  finalPostsData :any = {};

  name : string;
  counter = 0;

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
        //console.log(this.postsData)
      },
      err =>
      {
        console.log('Error Encountered')
      }
   
    )
    
  }
  postComment(val)
{

}

  addComment(value)
  {
    //console.log("Hello")
    //var $btn = $("<input type='text' placeholder='Comment your feedback'>")
    // .on("click",function(i){
    //   //this.getSlot(i)
    // //console.log("Jquery Function")
    // })
    //$("#comment").append($btn);
   // console.log(value)
    this.counter++;
   let curID = value;
   console.log(curID)

    var dynInp = document.createElement("input");
    dynInp.id="i"
    dynInp.onkeypress = function(event)
    {
     if (event.key === "Enter") {
      // console.log(dynInp.value);
      postComment(dynInp.value);
       //  return this.http.put('http://localhost:3000/api/addpost')        
      }
    //}
    //var node = document.createTextNode("This is new.");
    //para.appendChild(node);
    var btn = document.createElement("input")
    var element = document.getElementById(curID);

    element.appendChild(dynInp);
    element.appendChild(btn);

    btn.type = "button"
    btn.value = "Remove"
    btn.id = "b"
    btn.onclick = function()
    {
      var inp = document.getElementById('i');
      var btnn = document.getElementById('b')
    element.removeChild(inp);
    element.removeChild(btnn)
    }

      // $(wrapper).on("click",".remove_field", function(e){ //user click on remove field
      // e.preventDefault(); $(this).parent('div').remove(); x--;
      // })
      // });
     // console.log("World")
  }

}


}