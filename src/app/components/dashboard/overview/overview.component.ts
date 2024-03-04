import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  showModal = false;
  showUserFormModal = false;
  showTerminalFormModal = false;
  showProviderFormModal = false;


  myform : FormGroup;
  providerForm : FormGroup;

  constructor( private http: HttpClient,
    private clientService: ClientsService,
    private formBuilder: FormBuilder,
    private router: Router){
      this.myform = new FormGroup({
        uName: new FormControl('',	[Validators.required]),
        mobile: new FormControl('',	[Validators.required,  Validators.pattern(/^\+?\d{1,3}[-\s]?\d{9,11}$/)]),
        password: new FormControl('',  [Validators.required]),
        eMail: new FormControl('',  [ Validators.pattern('^.+@.+\..+$')]),
        cOption: new FormControl('',   [Validators.required]),
        optionChecked : new FormControl('',   [Validators.required]),
   
     }); 


     this.providerForm = new FormGroup({
      providerName: new FormControl('',	[Validators.required]),
      oem: new FormControl('',  [Validators.required]), 
   });
    }

  get formData() { return this.myform.controls; };

  get providerFormData() { return this.providerForm.controls; };


  toggleModal(){
    this.showModal = !this.showModal;
  }

  toggleUserFormModal(){
    this.showModal = !this.showModal;
    this.showUserFormModal = !this.showUserFormModal;
  }

  toggleTerminalFormModal(){
    this.showModal = !this.showModal;
    this.showTerminalFormModal = !this.showTerminalFormModal;

  }

  toggleProviderFormModal(){
    // this.showModal = !this.showModal;
    // this.showTerminalFormModal = !this.showTerminalFormModal;
    this.showProviderFormModal = !this.showProviderFormModal;
  }

  addProvider(){
    this.clientService.addProvider(this.providerForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (items: any) => {
        console.log(items)

      }
    })
  }



}
