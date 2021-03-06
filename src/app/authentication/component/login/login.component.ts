

import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/service/api.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formGroup: FormGroup;
  cookieValue: string;
  hr = '1'

  @ViewChild('loginForm') public login:NgForm;
  

  constructor(
    public formBuilder: FormBuilder,
    private api: ApiService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private spinner: NgxSpinnerService,
    private router: Router

  ){}


  ngOnInit() {
      this.createForm();
    localStorage.setItem('SessionUser', 'hr');
      
  }
 

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Email is required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password is required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit() {
  
    if (this.formGroup.invalid){
      this.toastr.error('Please enter valid credentials' )
      return  ;
      }
      this.spinner.show();
      

      console.log(this.formGroup.value);
      this.api.functionPOST('auth/login/hr',this.formGroup.value, true).subscribe((response)=>{
      console.log('response', response);
      this.toastr.success(response.message);
      this.spinner.hide();

      localStorage.setItem('token', response.result.token);
      localStorage.setItem('fName', response.result.firstName);
      this.cookieService.set('email', response.result.email);
      this.router.navigate(['home']);
     },


     (error)=>{
       console.log(error)
       this.toastr.error(error.message)
       this.spinner.hide();
     }) 

    }

}