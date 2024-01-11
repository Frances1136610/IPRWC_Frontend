import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {UserService} from "./user-service";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // @ts-ignore
  private userId: number;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  register(user: Object) {
    return this.http.post<any>(environment.apiKey + 'auth/register', user)
      .pipe(map(data => {
        if (data['code'] === 'ACCEPTED') {
          this.userService.setJWT(data['message']);
        } else {
          throw new Error(data['message'])
        }
      }));
  }

  login(credentials: Object) {
    return this.http.post<any>(environment.apiKey + 'auth/login', credentials)
      .pipe(map(data => {
        if (data['code'] === 'ACCEPTED') {
          this.userService.setJWT(data['message']);
        } else {
          throw new Error(data['message'])
        }
      }));
  }

  getNewUserId() {
    return this.http.get(environment.apiKey + 'auth/id')
      .pipe(map(res => {
        // @ts-ignore
        this.userId = res['payload'];
          return this.userId;
        }
      ));
  }

  getInfo() {
    let header = new HttpHeaders({"Authorization": "Bearer " + this.userService.getJWT()});
    return this.http.get<any>(environment.apiKey + 'auth/info',
    {
      headers: header
    }).pipe(map(data => {
      if (data['code'] === 'ACCEPTED') {
        return data['payload'];
      } else {
        throw new Error(data['payload'])
      }
    }));
  }
}
