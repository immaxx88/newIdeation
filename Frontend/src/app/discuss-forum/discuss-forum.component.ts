import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-discuss-forum',
  templateUrl: './discuss-forum.component.html',
  styleUrls: ['./discuss-forum.component.css']
})
export class DiscussForumComponent implements OnInit {

  constructor(private userService : UserService,private route : ActivatedRoute,private http: HttpClient,private router : Router) { }

  postsData : any ;

  finalPostsData :any = {};

  loggedInUser : string;
  counter = 0;

  comment : any = {};

  base64String : string;

  objImage : any = {};

  ngOnInit() {

    //getting parameters
    this.route.params.subscribe(
      params => 
      {
        this.loggedInUser = params['id'];
        console.log(this.loggedInUser)
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

  postCmnt(val)
  {
  this.userService.postComment(val).subscribe(
    res =>
    {
      console.log(res)
      //this.router.onSameUrlNavigation = 'reload'
      //this.router.navigateByUrl('/allposts/Vicky')
    },
    err =>
    {
      console.log(err);
    }
    )}

  addComment(id,author)
  {
  this.counter++;
   let curID = id;
    var dynInp = document.createElement("input");
    dynInp.id="i";
    
     dynInp.onkeypress = (event) =>
     {
           if (event.key === "Enter") {
           //console.log(dynInp.value) 
          //this.comment = dynInp.value

          this.comment={
            _id: curID,
            comments : dynInp.value,
            author : author
          }
         // this.postCmnt(this.comment)
          this.postCmnt(this.comment)
    //  //  this.comment = (inputevent.target).value
    // // event
     };   
    }

    //dynInp.onkeyup
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
  }


  finalImg(objImage)

  {
    this.userService.uploadImgg(objImage).subscribe(
      response =>
      {
        console.log(response)
        //this.router.onSameUrlNavigation = 'reload'
        //this.router.navigateByUrl('/allposts/Vicky')
        alert("Image Uploaded Successfully");
        this.router.navigate(['/allposts',this.loggedInUser])
      },
      err =>
      {
        console.log(err);
      }
      )
  }


  handlerOut(base64Temp,author,id)
  {
  //  console.log(base64String,author)
  this.objImage =
  {
    base64String : base64Temp,
    author : author,
    postid : id
  }

  this.finalImg(this.objImage);
  }

  trialFunc(files : FileList,author,id)
  {
      var f = files.item(0); // FileList object
      var reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = (
        (f)  => 
        {
          return (e) => {
          var imageSrc = reader.result.toString();
          this.handlerOut(imageSrc,author,id)
        };
      })(f);
  }

  // uploadImage(id,author)
  // {
  //   var dynFormUpload = document.createElement("input")
  //   dynFormUpload.type = "file"
  //   dynFormUpload.id = "file"


  //   var dynFormSubmit = document.createElement("input")
  //   dynFormSubmit.type = "button"
  //   dynFormSubmit.value = "Upload"
  //   dynFormSubmit.id ="upload"
  //   // dynFormSubmit.onclick = function()
  //   // {

  //   // }
    

  //   var element = document.getElementById(id)
  //   element.appendChild(dynFormUpload);
  //   element.appendChild(dynFormSubmit);

  //   var removeBtn = document.createElement("input")
  //   removeBtn.type = "button"
  //   removeBtn.value = "Remove"
  //   removeBtn.id = "remove"
    
  //   element.appendChild(removeBtn);

  //   removeBtn.onclick = function()
  //   {
  //     var inp = document.getElementById('file');
  //     var btnn = document.getElementById('upload');
  //     var remove = document.getElementById('remove');
  //   element.removeChild(inp);
  //   element.removeChild(btnn)
  //   element.removeChild(remove)
  //   }
  // }

}
