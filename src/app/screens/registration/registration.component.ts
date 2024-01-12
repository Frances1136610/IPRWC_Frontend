import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth-service";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user-service";
import { Subscription } from "rxjs";

function passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;

  if (password !== repeatPassword) {
    control.get('repeatPassword')?.setErrors({ 'passwordsDoNotMatch': true });
    return { 'passwordsDoNotMatch': true };
  }

  return null;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });
  submitted = false;
  error = "";
  private authSub!: Subscription;
  private userSub!: Subscription;
  private newUserId: number | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService) {}

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
        repeatPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
      {
        validators: passwordsMatchValidator
      }
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

    this.userSub = this.authService.getNewUserId().subscribe(data => {
      this.newUserId = data;
      const user = new User(
        this.newUserId,
        this.form.value.email,
        this.form.value.password,
        "USER"
      );
      this.userService.setUser(user);

      let credentials = {
        id: this.newUserId,
        email: this.form.value.email,
        password: this.form.value.password,
        role: "USER"
      }

      this.authSub = this.authService.register(credentials).subscribe(
        () => {
          this.authSub.unsubscribe();
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
        }
      );
      this.router.navigateByUrl("/");
      this.userSub.unsubscribe();
    });
  }
}
