import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { UtilService } from 'src/app/services/util.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  // userDetails = UtilService.getUserDetails() || "";

  userProfile = {
    fullName:"",
    userName:"",
    email:"",
    phoneNumber:"",
    staffId:"",
    securityConfig:"",
  }
  fullName="";

  constructor(private router: Router, private clientService: ClientsService) { }



  ngOnInit(): void {
    this.getUsersList();
  }


  usersList: any[] = []

  getUsersList(){
    this.clientService.getUsersList().subscribe({
      next:(items: any)=>{
          this.usersList = items;
      },
      error:(items:any)=>{

      }
    })
  }

  getRatings(num:number): number []{
    const ratings: number[] = [];
    for(let i = 0; i < num; i++){
      ratings.push(i);
    }
    return ratings;
  }

onSubmit(){
  console.log("hello world");
}

}
