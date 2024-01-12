import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth-service";
import {Subscription} from "rxjs";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error: string = '';
  submitted = false;
  private authSub!: Subscription;
  private infoSub!: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.authSub = this.authService.login(credentials).subscribe(() => {
      this.infoSub = this.authService.getInfo().subscribe(data => {
        const user = new User(
          data.id,
          data.email,
          data.password,
          data.role
        );
        this.userService.setUser(user);
      });
      this.authSub.unsubscribe();
      this.router.navigate(['/'])
    });
    this.form.reset();
  }
}
