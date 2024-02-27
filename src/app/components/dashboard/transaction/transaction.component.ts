import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  constructor(private route: ActivatedRoute, private clientService: ClientsService, private router: Router) { }

  transactionId = this.route.snapshot.params['transactionId'];


}
