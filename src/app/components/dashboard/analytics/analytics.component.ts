import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {


chart: any;


constructor(private router: Router, private clientService: ClientsService) { }





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


  ngOnInit(): void {
    this.getUsersList();
    this.displayChat();
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





  displayChat() {
  
      // this.chart = new Chart('canvas', {
      //       type: 'doughnut',
      //       data: {
      //         labels: ['Data1','Data2'],
      //         datasets: [
      //           { 
      //             data: [55,45],
      //             backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
      //             fill: false
      //           },
      //         ]
      //       },
      //       options: {
      //         legend: {
      //           display: false
      //         },
      //         tooltips:{
      //           enabled:false
      //         }
      //       }
      //     });
    }

}
