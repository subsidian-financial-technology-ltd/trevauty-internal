import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { baseURL } from './utils';
import { TokenService } from './token.service';
import { ProviderDetails } from '../types/Type';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {



  baseURL = "http://localhost:8080";
  singupUrl = 'https://smartb2c.ubagroup.com/bscv2/api/Accounts/Login';

  constructor(private http: HttpClient) { }

  terminalRequest(userDetails:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.baseURL + "terminal request", userDetails);
  }

  accountLogin(authCredentials:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.singupUrl, authCredentials);
  }

  passwordReset(usersDetail:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.singupUrl, usersDetail);
  }

  getTerminals(): Observable<any> {

    // api/v1/internal/terminal/terminals?state=ACTIVE

    return this.http.get<any>('assets/data/terminalData.json');
  }


  getTransactions(page: number, size:number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/analytic/transactions?page=${page}&size=${size}`,{body: {}}, { headers: headers });
  }

  getUserById(userId: number): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    // return this.http.get<any>(`${baseURL}https://fakestoreapi.com/products/${userId}`, { headers: headers });
    return this.http.get<any>(`https://fakestoreapi.com/products/${userId}`, { headers: headers });

    
    // throw new Error('Method not implemented.');
  }

  getMerchantById(merchantId: number): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/internal/profile?merchantId=${merchantId}`,{body:{}});
  }
  


  getTerminalPerMerchant(merchantId: string, page: number , size: number): Observable<any> {
    return this.http.post<any>(`${baseURL}api/v1/terminal/terminals-per-merchant?merchantId=${merchantId}&page=${page}&size=${size}`, {body:{}});
  }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>('assets/data/userData.json');
  // }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>('https://fakestoreapi.com/products');
  // }

  getUsers(): Observable<any> {
    return this.http.post<any>(`${baseURL}api/v1/internal/profile`, {body:{}});
  }

  getMerchants(page: number, size: number): Observable<any> {
    return this.http.post<any>(`${baseURL}api/v1/internal/profile?page=${page}&size=${size}`, {body:{}});
  }

  getMerchantsTransactions(page: number, size: number, merchantId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/analytic/merchant-transaction?merchantId=${merchantId}&page=${page}&size=${size}`, {body:{}} );
  }


  addProvider(providerDetails: ProviderDetails): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/provider/add`, {body: providerDetails} );
  }

  getProviders(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/provider/fetch`, {body:{}} );
  }

  

  getUsersList(): Observable<any> {
    return this.http.get<any>('assets/data/usersList.json');
  }
  
  getActionTerminals(): Observable<any>{
    return this.http.get<any>('assets/data/actionTerminal.json');
  }
  getTerminal():Observable <any> {
    return this.http.get<any>('assets/data/eachTerminal.json');

  }
  // getTransactions():Observable<any>{
  //   return this.http.get<any>('assets/data/transactions.json').pipe(map((res: any) => {
  //     console.log("API response>>", res);
  //     return res;
  //   }))
  // }
}
