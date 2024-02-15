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
  data: any[] = [];
  page: number = 0;
  size: number = 10;
  analyticsOverview: any;
  transactions : any = {};

  filterParams: any = {

  }


  terminalFilterRequest = {
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

getUsers(): void{

  this.clientService.getUsers().subscribe({
    next:(res: any)=>{
      this.userList = res;

      console.log(res);

    }, error:()=>{

    }
  })

}

showDetails(user: any): void {
  console.log(user);
  this.router.navigate(['dashboard/clients', user]); 
}



  ngOnInit(): void {
    this.getTerminals();
    this.getUsers();
    this.getUsersList();
    // this.getTransactions();

    this.getTerminals();
    this.getUsers();

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


  getTerminals(): void {
    console.log("hello world");
    console.log(this.terminalFilterRequest.page, this.terminalFilterRequest.size);
    this.clientService.getTransactions(this.terminalFilterRequest.page, this.terminalFilterRequest.size).subscribe({
      next: (response: any) => {
        this.transactions = response;
        this.apiResponse = response;
        // this.data = this.apiResponse?.data?.content;
        this.data = [{role:"role"}, {role:"role"}];
        console.log(this.data);
        this.totalNumOfEntry = this.apiResponse?.data?.totalElements;
        this.getNumberOfPages(this.totalNumOfEntry);
        console.log(this.data);
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
      this.getTerminals();
    }
  }
  pageDecrement() {
    console.log("hello 2");
    if (this.page > 1) {
      this.page - 1;
      this.getTerminals();
    }
  }

  getNumberOfPages(totalEntry: number): void {
    console.log(totalEntry);
    console.log(this.terminalFilterRequest.size);
    if (totalEntry % this.terminalFilterRequest.size == 0) {
      this.numOfPages = totalEntry / this.terminalFilterRequest.size;
    } else {
      this.numOfPages = 1 + Math.floor(totalEntry / this.terminalFilterRequest.size);
    }
  }

  nextPage(): void {
    if (this.terminalFilterRequest.page + 1 < this.numOfPages) {
      this.terminalFilterRequest.page = this.terminalFilterRequest.page + 1;
      this.getTerminals();
    }
  }

  previousPage(): void {
    if (this.terminalFilterRequest.page + 1 > 1) {
      this.terminalFilterRequest.page = this.terminalFilterRequest.page - 1;
      this.getTerminals();
    }
  }

  getSize(size: number): void {
    this.terminalFilterRequest.size = size;
    this. getTerminals();
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
