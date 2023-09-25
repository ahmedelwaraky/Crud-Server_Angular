import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router,
  private activateroute: ActivatedRoute){}
data: string = "";

loginForm = new FormGroup({
  userName : new FormControl('',[Validators.required,Validators.minLength(3)]),
  password : new FormControl('',[Validators.required,Validators.minLength(3)])
})

get getUserName(){
  return this.loginForm.controls['userName']
}
get getPassword(){
  return this.loginForm.controls['password']
}
formOperation(e:Event){
e.preventDefault
if (!this.getUserName.errors&&!this.getPassword.errors) {
localStorage.setItem('isLogin','true')
this.router.navigate(['/products'])
  
}

}}
