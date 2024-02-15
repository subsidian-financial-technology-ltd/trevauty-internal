import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {


  userId: number = 0;
  product: any;
  transactions : any = {};


  constructor(private route: ActivatedRoute, private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getTerminalDetail();
    this.getMerchantDetails();
    this.getTerminal1();

  }


  terminal : any = {};


  getMerchantDetails(): void{
    console.log("hello world 1")
    const productId = this.route.snapshot.params['id'];
    this.clientService.getUserById(productId).subscribe({
      next:(data: any)=> {
        this.product = data;
      }
    });
  }

  getTerminalDetail(): void{
    this.clientService.getTerminal().subscribe({
      next:(item: any)=>{
        this.terminal = item;
      },
      error:(err: any)=>{
          console.log(err);
      }
    })
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

}
