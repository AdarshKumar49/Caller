import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ApiService } from './shared/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private api:ApiService) { }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }



  /*isLogged() {
    return localStorage.getItem('token') != null;*/
  
    // Handler
  /*this.api.checkResponse(response:Boolean){
    const results = response;
    if (results.status === 'success') {
      success:true;
      return results.data;}*/
   }
   
  


