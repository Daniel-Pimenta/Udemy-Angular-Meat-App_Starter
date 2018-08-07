import { Component, OnInit }                 from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { LoginService }                      from "./login.service";

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  getEmail() : string {
    return this.loginForm.value.email;
  }

  getPassWord() : string {
    return this.loginForm.value.password;
  }

  constructor(private fb:FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email   : this.fb.control('',[Validators.required, Validators.email]),
      password: this.fb.control('',[Validators.required])
    })
  }

  login(){
    this.loginService.login(this.getEmail(),this.getPassWord())
      .subscribe(user => console.log(user));
  }

}
