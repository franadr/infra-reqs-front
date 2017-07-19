import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Token} from '../model/token';
import {User_AD} from '../model/User_AD';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  public token: Token;
  public user_ad: User_AD;
  public siadUrl = environment.siadUrl;
  constructor(private http: Http, private router: Router) { }


  login(username: string , password: string): Observable<boolean> {

   return this.http.post(this.siadUrl + 'authentication', JSON.parse(JSON.stringify({username: username, password: password})))
     .map((response: Response) => {
       this.token = response.json() ;
       console.log(localStorage.length);
         localStorage.clear();
         localStorage.setItem('currentUser', this.token.accessToken);
         localStorage.setItem('currentTri', this.token.trigram);
         localStorage.setItem('ladp', this.token.userName);
         console.log(username + 'logged in');
         return true;
     });
  }
  logout() {

    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ladp');
    localStorage.removeItem('currentTri');
    this.router.navigate(['/login']);

  }

}
