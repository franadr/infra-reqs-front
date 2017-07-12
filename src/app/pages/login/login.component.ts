import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;


  public submitted = false;
  public error = '';
  public loading = false;


  constructor(fb: FormBuilder, private router: Router, private authService: AuthenticationService) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }
  ngOnInit(): void {
    this.error = '';
  }
  public onSubmit(values: User): void {
    this.loading = true;
    this.submitted = true;
    if (this.form.valid) {
      this.authService.login(values.username, values.password).subscribe(result => {
      if (result === true) {
        this.router.navigate(['/pages/dashboard2']);

      } else {
        this.error = 'Username or password incorrect';
        this.loading = false
      }

      },
      error => {
        this.error = error.statusText;
        this.loading = false;
                })
    }
  }
}
