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
}
