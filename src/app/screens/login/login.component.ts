import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
// import {AuthService} from "../../services/auth-service";

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


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group(
  //     {
  //       email: ['', [Validators.required, Validators.email]],
  //       password: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(40)
  //         ]
  //       ],
  //     },
  //   );
  // }
  //
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  // onSubmit(): void {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   const email = this.form.value.email;
  //   const password = this.form.value.password;
  //
  //   this.authService.login(email, password).subscribe(
  //     resData => {
  //       console.log(resData);
  //       this.router.navigate(['/']);
  //     },
  //     errorMessage => {
  //       console.log(errorMessage);
  //       this.error = errorMessage;
  //     }
  //   );
  //   this.form.reset();
  // }
}
