import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {


  userId: number = 0;
  merchant: any;
  transactions : any = [];
  terminals: any = [];
  transactionApiResponse: any;
  terminalApiResponse: any;
  deposits:any = [];


  transactionPage: number = 0;
  transactionSize: number = 10;

  terminalPage: number = 0;
  terminalSize: number = 10;
  merchantId = this.route.snapshot.params['merchantId'];
  terminalsPerMerchant: any[] = [];
  transactionNumOfPages: number = 0;
  terminalNumOfPages: number = 0;
  totalNumOfTransactionEntry: number = 0;
  totalNumOfTerminalEntry : number = 0;

  transactionFilterRequest = {
    status: null,
    paymentId: null,
    creationDate: null,
    page: 0,
    size: 5,
    // startDate: null ,
    // endDate: null 
  }

  terminalFilterRequest = {
    status: null,
    paymentId: null,
    creationDate: null,
    page: 0,
    size: 5,
    // startDate: null ,
    // endDate: null 
  }




  constructor(private route: ActivatedRoute, private clientService: ClientsService, private router: Router) { }

  ngOnInit(): void {
    this.getTerminalDetail();
    this.getMerchantDetails();
    this.getTerminalPerMerchant();
    this.getMerchantTranasactions();

  }


  terminal : any = {};


  getMerchantDetails(): void{
    console.log("hello world 1")
    // const 
    this.clientService.getMerchantById(this.merchantId).subscribe({
      next:(data: any)=> {
        this.merchant = data.data.content[0];
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


  getMerchantTranasactions(): void {
    console.log("hello world");
    console.log(this.transactionFilterRequest.page, this.transactionFilterRequest.size);
    this.clientService.getMerchantsTransactions(this.transactionFilterRequest.page, this.transactionFilterRequest.size, this.merchantId).subscribe({
      next: (response: any) => {
        this.transactionApiResponse = response;
        // this.data = this.transactionApiResponse?.data?.content;
        this.transactions = response?.data?.content;

        console.log(this.transactions);

        this.totalNumOfTransactionEntry = this.transactionApiResponse?.data?.totalElements;
        this.getTransactionNumberOfPages(this.totalNumOfTransactionEntry);
        console.log(this.transactions);
      },
      error: (items: any) => {

      }
    })
  }

  // getAnalyticsOverview(): void {
  //   this.clientService.getAnalyticsOverview().subscribe({
  //     next: (response: any) => {
  //       this.analyticsOverview = response;
  //       console.log(this.analyticsOverview);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   })
  // }


  transactionsPageIncrement() {
    console.log("hello 1");
    if (this.transactionPage < this.transactionApiResponse?.totalPages) {
      this.transactionPage + 1;
      this.getMerchantTranasactions();
    }
  }

  transactionsPageDecrement() {
    console.log("hello 2");
    if (this.transactionPage > 1) {
      this.transactionPage - 1;
      this.getMerchantTranasactions();
    }
  }

  getTransactionNumberOfPages(totalEntry: number): void {
    console.log(totalEntry);
    console.log(this.transactionFilterRequest.size);
    if (totalEntry % this.transactionFilterRequest.size == 0) {
      this.transactionNumOfPages = totalEntry / this.transactionFilterRequest.size;
    } else {
      this.transactionNumOfPages = 1 + Math.floor(totalEntry / this.transactionFilterRequest.size);
    }
  }

  transactionNextPage(): void {
    if (this.transactionFilterRequest.page + 1 < this.transactionNumOfPages) {
      this.transactionFilterRequest.page = this.transactionFilterRequest.page + 1;
      this.getMerchantTranasactions();
    }
  }

  transactionPreviousPage(): void {
    if (this.transactionFilterRequest.page + 1 > 1) {
      this.transactionFilterRequest.page = this.transactionFilterRequest.page - 1;
      this.getMerchantTranasactions();
    }
  }

  getTransactionSize(size: number): void {
    this.transactionFilterRequest.size = size;
    this. getMerchantTranasactions();
  }







  // terminal methods


  terminalPageIncrement() {
    console.log("hello 1");
    if (this.terminalPage < this.terminalApiResponse?.totalPages) {
      this.terminalPage + 1;
      this.getMerchantTranasactions();
    }
  }

  terminalPageDecrement() {
    console.log("hello 2");
    if (this.terminalPage > 1) {
      this.terminalPage - 1;
      this.getMerchantTranasactions();
    }
  }

  
  getNumberOfTerminalPages(totalEntry: number): void {
    console.log(totalEntry);
    console.log(this.terminalFilterRequest.size);
    if (totalEntry % this.terminalFilterRequest.size == 0) {
      this.terminalNumOfPages = totalEntry / this.terminalFilterRequest.size;
    } else {
      this.terminalNumOfPages = 1 + Math.floor(totalEntry / this.terminalFilterRequest.size);
    }
  }


  getTerminalPerMerchant(): void {
    console.log("hello world");
    console.log(this.terminalFilterRequest.page, this.terminalFilterRequest.size);
    this.clientService.getTerminalPerMerchant(this.merchantId, this.terminalFilterRequest.page, this.terminalFilterRequest.size).subscribe({
      next: (response: any) => {
        console.log("reponse 2")
        console.log(response);
        console.log("reponse 2")

        this.terminalApiResponse = response;
        // this.data = this.terminalApiResponse?.data?.content;
        this.terminalsPerMerchant = response?.data?.content;

        console.log(this.terminalsPerMerchant);

        this.totalNumOfTerminalEntry = this.terminalApiResponse?.data?.totalElements;
        this.getNumberOfTerminalPages(this.totalNumOfTerminalEntry);
        console.log(this.terminalsPerMerchant);
      },
      error: (err: any) => {

        console.error(err)

      }
    })
  }

  terminalNextPage(): void {
    if (this.terminalFilterRequest.page + 1 < this.terminalNumOfPages) {
      this.terminalFilterRequest.page = this.terminalFilterRequest.page + 1;
      this.getTerminalPerMerchant();
    }
  }

  terminalPreviousPage(): void {
    if (this.terminalFilterRequest.page + 1 > 1) {
      this.terminalFilterRequest.page = this.terminalFilterRequest.page - 1;
      this.getTerminalPerMerchant();
    }
  }

  getTerminalSize(size: number): void {
    this.terminalFilterRequest.size = size;
    this. getTerminalPerMerchant();
  }


  showTransactionDetails(transaction: any): void {
    console.log(transaction);
    this.router.navigate([`dashboard/clients/:${this.merchantId}`, transaction]); 
  }

}
