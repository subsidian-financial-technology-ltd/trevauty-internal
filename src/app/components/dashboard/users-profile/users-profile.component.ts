import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent {

  // userDetails = UtilService.getUserDetails() || "";

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

}
