import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  data: any[] = []

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.getTerminals();
    this.getUsers();
    this.getUsersList();
    this.getTerminal1();
    this.getTerminalDetail();
    this.getTransactions();
  }

  getTerminals(){
    this.clientService.getTerminals().subscribe({
      next:(items: any)=>{
          this.data = items;
      },
      error:(items:any)=>{

      }
    })
  }









  users: any[] = []

  getUsers(){
    this.clientService.getUsers().subscribe({
      next:(items: any)=>{
          this.users = items;
      },
      error:(items:any)=>{

      }
    })
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



  terminalData1 : any[] = [];

  getTerminal1(){
    this.clientService.getTerminal1().subscribe({
      next:(items: any)=>{
          this.terminalData1 = items;
      },
      error:(items:any)=>{

      }
    })
  }


  terminal : any = {};

  getTerminalDetail(){
    this.clientService.getTerminal().subscribe({
      next:(item: any)=>{
        this.terminal = item;
      },
      error:(err: any)=>{
          console.log(err);
      }
    })
  }


  transactions : any = {};

  getTransactions(){
    this.clientService.getTransactions().subscribe({
      next:(item: any)=>{
        this.transactions = item;
      },
      error:(err: any)=>{
          console.log(err);
      }
    })
  }

  
}
