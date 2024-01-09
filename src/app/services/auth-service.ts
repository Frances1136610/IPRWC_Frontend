// import {Injectable} from "@angular/core";
// import {HttpClient, HttpErrorResponse} from "@angular/common/http";
// import {Router} from "@angular/router";
// import {User} from "../models/user.model";
// import {catchError, Subject, tap, throwError} from "rxjs";
//
// @Injectable()
// export class AuthService {
//   user = new Subject<User>();
//
//   constructor(private http: HttpClient, private router: Router) {}
//
//   register(email: string, password: string) {
//     return this.http.post<AuthResponseData>('${baseUrl}/api/login', {email, password}
//     ).pipe(
//       catchError(this.handleError),
//       tap(resData => {
//         this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
//     }));
//   }
//
//   login(email: string, password: string) {
//     return this.http.post<AuthResponseData>('${baseUrl}/api/login', {email, password}
//     ).pipe(
//       catchError(this.handleError),
//       tap(resData => {
//         this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
//     }));
//   }
//
//   private handleAuth(email:string, userId: string, token: string, expiresIn: number) {
//     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
//     const user = new User(email, userId, token, expirationDate);
//     this.user.next(user);
//   }
//
//   private handleError(errorRes: HttpErrorResponse) {
//     let errorMessage = 'An unknown error occured!';
//     if(!errorRes.error || !errorRes.error.error) {
//       return throwError(errorMessage);
//     }
//     switch (errorRes.error.error.message) {
//       case 'EMAIL_EXISTS':
//         errorMessage = 'This email exists already';
//         break;
//       case 'EMAIL_NOT_FOUND':
//         errorMessage = 'This email does not exist';
//         break;
//       case 'INVALID_PASSWORD':
//         errorMessage = 'This password is not correct';
//         break;
//     }
//     return throwError(errorMessage);
//   }
// }
