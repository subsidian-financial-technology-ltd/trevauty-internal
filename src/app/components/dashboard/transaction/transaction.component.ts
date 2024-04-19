import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  transaction: any = {};

  constructor(private route: ActivatedRoute, private clientService: ClientsService, private router: Router) { }

  transactionId = this.route.snapshot.params['transactionId'];


  ngOnInit(){
    this.getSingleMerchantsTransaction()
  }

  getSingleMerchantsTransaction(){
    this.clientService.getSingleMerchantsTransaction(this.transactionId).subscribe({
      next: (response: any) => {
          console.log(response)
          this.transaction = response.data.content[0];
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }




}
