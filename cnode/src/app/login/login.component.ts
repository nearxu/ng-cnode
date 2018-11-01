import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private service: LoginService) { }

  ngOnInit() {
  }
  login() {
    this.service.handleLogin(this.user.value)
      .subscribe(data => {
        console.log(data, 'data');
      })
  }
  onSubmit() {
    console.log(this.user.value, 'this submit')
  }

}
