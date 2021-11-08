import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from "ngx-spinner";
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  cookieValue = ''; 
  
 


 

  constructor( private formBuilder: FormBuilder, private route : ActivatedRoute , private router : Router,private toastr: ToastrService , private cookieService : CookieService,private spinner: NgxSpinnerService)  { 
    this.cookieService.set('X-Auth-Token', uuidv4());
    this.cookieValue = this.cookieService.get('X-Auth-Token');
  }

  ngOnInit() {
   
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
    
  
    //this.api.functionPOST('user/login',this.loginForm.value).subscribe((response)=>{
    //  console.log('response', response)
   // })
  }
  
  

 
  //this.submitted = true;
  //if(this.loginForm.invalid){
    //  return;
  //}
  
  //this.loading = true;
  
//}
onClick(){
  this.toastr.success('hello, you are!' )
}
}