import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  selectedMenu:any = 'List';

  goTo(paramText:string){
    this.selectedMenu = paramText
  }

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
  }
  displayList(){
    this.api.functionGET('appConfiguration/company').subscribe((response)=>{
      console.log('response', response);

      this.router.navigate(['home']);
     })


    }
  displayNumbers(){
    this.api.functionGET('company/1/employee?search=&limit=10&page=1&orderBy=ASC&sortBy=createdAt').subscribe((response)=>{
      console.log('response', response);
      this.router.navigate(['employeelist']);
     })

  }
  displayReimbursement(){
    this.api.functionGET('reimbursement?').subscribe((response)=>{
      console.log('response', response);

      this.router.navigate(['reimbursement']);
     })

  }

}
