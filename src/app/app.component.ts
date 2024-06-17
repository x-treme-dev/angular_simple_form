import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'angular-form';
  loginForm: any = {
    login: 'Ivanov...',
    email: 'ivanov@mail.ru',
    password: 'iv23',
   };

   printForm(){
   console.log(this.loginForm);
   window.localStorage.setItem('login', this.loginForm.login);
   window.localStorage.setItem('email', this.loginForm.email);
   window.localStorage.setItem('password', this.loginForm.password);
  
   }

}

