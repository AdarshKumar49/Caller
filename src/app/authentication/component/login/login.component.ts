import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from "ngx-spinner";
import { v4 as uuidv4 } from 'uuid';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  cookieValue = ''; 
  
 


 

  constructor( private formBuilder: FormBuilder, private route : ActivatedRoute , private router : Router,private toastr: ToastrService , private cookieService : CookieService,private spinner: NgxSpinnerService , private api:ApiService)  { 
    this.cookieService.set('X-Auth-Token', uuidv4());
    this.cookieValue = this.cookieService.get('X-Auth-Token');
  }

  ngOnInit() {
   
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);
  }
  
  
  loginForm: FormGroup = this.formBuilder.group({
    email : ['' , [Validators.compose([Validators.required , Validators.email])]],
    password : ['', [Validators.required , Validators.minLength(4)]]
  });



onSubmit(){
 
 
   
  //  this.submitted = false;

    
    //if (this.loginForm.invalid){
    //return ;
    //}
    
    console.log(this.loginForm.value)
    this.api.functionPOST('user/login',this.loginForm.value).subscribe((response)=>{
    console.log('response', response)
   })
  }
  
  

 
  //this.submitted = true;
  //if(this.loginForm.invalid){
    //  return;
  //}
  
  //this.loading = true;
  
//}
onClick(){
  this.toastr.success('Great,for logging in again' )
}
}