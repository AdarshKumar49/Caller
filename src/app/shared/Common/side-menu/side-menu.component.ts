import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
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
