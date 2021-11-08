import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toastr:ToastrService,  private api: ApiService,private router: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    this.spinner.show();
    this.api.functionGET('auth/logout').subscribe((response)=>{
      console.log('response', response);
      this.toastr.success(response.message);
      this.spinner.hide();
      localStorage.clear();

      this.router.navigate(['']);
     },
     (error)=>{
       console.log(error)
       this.toastr.error(error.message)
       this.spinner.hide();
  })
  }

}
