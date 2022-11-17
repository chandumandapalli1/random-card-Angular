import { Component,OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'random-card';
//instead of user:any( generally not recommended) can also create interface and mark all the values 
// that we are expecting

  user:any ;
  //injecting user service and toastr  into the constructor 
  //without injecting they cant be accessed...
  constructor( private userService:UserService,
                private toastr:ToastrService )
  {

  }

  ngOnInit()
  {
   return this.userService.getUser().subscribe(
    (user:any)=>
    {
      console.log(user);
      this.user=user.results[0];
    },
    (err)=>
    {
      this.toastr.error(err.status,"OOps! Please check the URL");
    }

   )   
  }
}
