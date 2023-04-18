import { Component, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // @ViewChild('emailInput',{static:true}) username: ElementRef;
 // @ViewChild('password',{static:true}) password: ElementRef;

constructor(private router: Router){}

  login(){
     //se nao for email nao e senha nao entra
     const loginMail = "emailInput"
     const loginSenha = "123"

    // this.emailInput = this.emailInput.nativeElement.value
    // this.senhaInput = this.senhaInput.nativeElement.value
     

    // if("emailInput" == loginMail && "123" == loginSenha) {
      this.router.navigate(['/home'])
    // }
  }

}
