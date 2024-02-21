import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  apiResponse: any;
  merchants: any[] = [];
  page: number = 0;
  size: number = 10;
  analyticsOverview: any;
  transactions : any = {};

  filterParams: any = {

  }


  merchantFilterRequest = {
    status: null,
    paymentId: null,
    creationDate: null,
    page: 0,
    size: 5
  }
  numOfPages: number = 0;
  totalNumOfEntry: number = 0;

userList: any[] = []; 

constructor(private router: Router, private clientService: ClientsService) { }

// getUsers(): void{
//   console.log("hello world 3")

//   this.clientService.getUsers().subscribe({
//     next:(res: any)=>{
//       this.userList = res;
//       // this.merchants = res;

//       console.log(res);

//     }, error:()=>{

//     }
//   })

// }

showDetails(user: any): void {
  console.log(user);
  this.router.navigate(['dashboard/clients', user]); 
}



  ngOnInit(): void {
    this.getMerchants();
    // this.getUsers();
    this.getUsersList();
    // this.getTransactions();

    // this.getUsers();

    // this.getAnalyticsOverview();
  }

  // getTerminals(){
  //   this.clientService.getTerminals().subscribe({
  //     next:(items: any)=>{
  //         this.data = items;
  //     },
  //     error:(items:any)=>{

  //     }
  //   })
  // }


  getMerchants(): void {
    console.log("hello world");
    console.log(this.merchantFilterRequest.page, this.merchantFilterRequest.size);
    this.clientService.getMerchants(this.merchantFilterRequest.page, this.merchantFilterRequest.size).subscribe({
      next: (response: any) => {
        this.transactions = response;
        this.apiResponse = response;
        // this.data = this.apiResponse?.data?.content;
        this.merchants = response?.data?.content;
        console.log(this.merchants);
        this.totalNumOfEntry = this.apiResponse?.data?.totalElements;
        this.getNumberOfPages(this.totalNumOfEntry);
        console.log(this.merchants);
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


  pageIncrement() {
    console.log("hello 1");
    if (this.page < this.apiResponse?.totalPages) {
      this.page + 1;
      this.getMerchants();
    }
  }
  pageDecrement() {
    console.log("hello 2");
    if (this.page > 1) {
      this.page - 1;
      this.getMerchants();
    }
  }

  getNumberOfPages(totalEntry: number): void {
    console.log(totalEntry);
    console.log(this.merchantFilterRequest.size);
    if (totalEntry % this.merchantFilterRequest.size == 0) {
      this.numOfPages = totalEntry / this.merchantFilterRequest.size;
    } else {
      this.numOfPages = 1 + Math.floor(totalEntry / this.merchantFilterRequest.size);
    }
  }

  nextPage(): void {
    if (this.merchantFilterRequest.page + 1 < this.numOfPages) {
      this.merchantFilterRequest.page = this.merchantFilterRequest.page + 1;
      this.getMerchants();
    }
  }

  previousPage(): void {
    console.log("size page" +this.merchantFilterRequest.size);
    if (this.merchantFilterRequest.page + 1 > 1) {
      this.merchantFilterRequest.page = this.merchantFilterRequest.page - 1;
      this.getMerchants();
    }
  }

  getSize(size: number): void {
    this.merchantFilterRequest.size = size;
    this. getMerchants();
  }











  users: any[] = []

  // getUsers(){
  //   this.clientService.getUsers().subscribe({
  //     next:(items: any)=>{
  //         this.users = items;
  //     },
  //     error:(items:any)=>{

  //     }
  //   })
  // }

  
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















  name = 'Angular';
  // view: any[];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

    view: any[] | any = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;
  colorScheme : any = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  // data goes here
public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  },
  {
    "name": "Germany",
    "value": 196750
  },
  {
    "name": "France",
    "value": 204617
  }
];


public multi = [
  {
    "name": "China",
    "series": [
      {
        "name": "2018",
        "value": 2243772
      },
      {
        "name": "2017",
        "value": 1227770
      }
    ]
  },
  {
    "name": "USA",
    "series": [
      {
        "name": "2018",
        "value": 1126000
      },
      {
        "name": "2017",
        "value": 764666
      }
    ]
  },
  {
    "name": "Norway",
    "series": [
      {
        "name": "2018",
        "value": 296215
      },
      {
        "name": "2017",
        "value": 209122
      }
    ]
  },
  {
    "name": "Japan",
    "series": [
      {
        "name": "2018",
        "value": 257363
      },
      {
        "name": "2017",
        "value": 205350
      }
    ]
  },
  {
    "name": "Germany",
    "series": [
      {
        "name": "2018",
        "value": 196750
      },
      {
        "name": "2017",
        "value": 129246
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2018",
        "value": 204617
      },
      {
        "name": "2017",
        "value": 149797
      }
    ]
  }
];

  
}



const merchantSingle = {
  "_id": "00637b2a-158d-465c-8c35-d2290c3a6ab8",
  "businessId": "",
  "merchantId": "SUB-MERC0000023",
  "merchantName": null,
  "contactTitle": "Mr",
  "contactName": "Sabastine Otem",
  "mobilePhone": "07037626977",
  "email": "sabbyboy93@gmail.com",
  "emailAlerts": "",
  "physicalAddr": "Splash 155 Complex Km 47, Lekki-Epe Expressway, Oko-Ado, Lagos State, Nigeria",
  "stateCode": "",
  "lga": "",
  "postCode": "",
  "url": "",
  "businessOccupationCode": "",
  "merchantCategoryCode": "",
  "terminalOwnerCode": "",
  "ptsp": "",
  "visaAcquirerIdNumber": "000000",
  "verveAcquirerIdNumber": "000000",
  "mastercardAcquirerIdNumber": "000000",
  "bankCode": "000013",
  "bankAccNo": "0170252417",
  "bankType": "GTBANK PLC",
  "accountName": "Sabastine Otem",
  "ptspCode": "03",
  "connected": true,
  "active": true,
  "dateCreated": "2024-02-17 10:21:09",
  "dateModified": "2024-02-17 04:44:01",
  "lastActiveDate": "2024-02-17 10:21:09",
  "walletActive": true,
  "walletId": "65d07a86dcc8576b9812290c",
  "secondaryMerchantId": "07613400000BLN2",
  "createdDateConverter": [
      2024,
      2,
      17,
      10,
      21,
      9
  ]
}