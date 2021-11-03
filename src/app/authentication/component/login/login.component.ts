import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder , FormGroup , Validators ,Form} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  submitted = true;
  loading = true;



  constructor( private formBuilder: FormBuilder, private route : ActivatedRoute , private router : Router) { }

  ngOnInit() {
  }
  loginForm:FormGroup = this.formBuilder.group({
    email : ['' , Validators.required , Validators.email],
    password : ['', Validators.required , Validators.minLength(4)]
  });
  
  onSubmit(){
  
    if(this.loginForm.invalid){
       return;
    }
    this.loading = true;

  }
  
}
