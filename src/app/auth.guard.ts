import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ApiService } from './shared/service/api.service';
import { LoginComponent } from './authentication/component/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthService , private router:Router , private api: ApiService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
        return true;
    }

   
    this.router.navigate(['/login']);
   
    return false;
  }



      
    /*  const login = !!this.auth.gettoken();
      if(login){
        this.api.checkResponse(login).subscribe( 
          (         _login: any) => { this.router.navigate(['/home']); return false; });
       
      }else{
        this.router.navigate(['/login']);
        return true;
      }**/


    /* if (localStorage.getItem('token') != null){
      return true;}
      else{
      this.router.navigate(['/login']);
      return false;}
  }*/
  
}  
  

  

