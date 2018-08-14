import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  errorMessage = '';
  shouldShowErrorMessage = false;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private utilityService: UtilityService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.loginForm.reset();
  }

  onLogin() {
    this.shouldShowErrorMessage = false;
    console.log('Login tapped ...');
    const userName = this.userName.value;
    const password = this.password.value;

    if (this.loginForm.valid) {
      console.log('Valid login form ...');
      this.apiService.postLogin(userName, password).subscribe(res => {
        console.dir(res);
        if (res.status === 200) {
          console.log('Login success ...');
          this.utilityService.saveToken(res.token);
          this.router.navigate(['admin']);
        } else {
          this.shouldShowErrorMessage = true;
          this.errorMessage = res.error;
        }
      });
    }
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }
}
