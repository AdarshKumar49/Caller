import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  name ="";
  email = "";

  constructor(private api: ApiService,private router: Router , private cookie: CookieService) { }

  ngOnInit() {
    this.name = localStorage.getItem('fName');
    this.email = this.cookie.get('email');
  }
 

  displayList(){
    this.router.navigate(['home']);


    }
  displayNumbers(){
    this.router.navigate(['employeelist']);
  }
  displayReimbursement(){
   
      this.router.navigate(['reimbursement']);
    

  }

}
