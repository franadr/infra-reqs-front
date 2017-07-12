import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Token} from '../model/token';
import {User_AD} from '../model/User_AD';
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService {

  public token: Token;
  public user_ad: User_AD;
  public siadUrl = environment.siadUrl;
  constructor(private http: Http) { }


  login(username: string , password: string): Observable<boolean> {

   return this.http.post(this.siadUrl+'authentication', JSON.parse(JSON.stringify({username: username, password: password})))
     .map((response: Response) => {
       const token: Token = response.json() ;
         localStorage.setItem('currentUser', token.accessToken);
         localStorage.setItem('currentTri', token.trigram);
         localStorage.setItem('ladp', token.userName);
         console.log('logged in');
         return true;
     });

  }

  getUserInfo(trigrame: string): Observable<User_AD> {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.set('authorization', this.token.accessToken);

    return this.http.get(this.siadUrl+'users/by-trigram/' + trigrame, options ).map((res: Response) => res.json())


  }

}
