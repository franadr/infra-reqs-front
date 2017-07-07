import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Token} from '../model/token';
import {User_AD} from '../model/User_AD';

@Injectable()
export class AuthenticationService {

  public token: Token;
  public user_ad: User_AD;
  constructor(private http: Http) { }


  login(username: string , password: string): Observable<boolean> {

   return this.http.post('https://si-ad.intech.lu/authentication', JSON.parse(JSON.stringify({username: username, password: password})))
     .map((response: Response) => {
       const token: Token = response.json() ;


       if (token) {
         this.token = token;
         localStorage.setItem('currentUser', token.accessToken);
         localStorage.setItem('currentTri', token.trigram);
         localStorage.setItem('ladp', token.userName);
         console.log('logged in');
         this.getUserInfo(this.token.trigram).subscribe(res => this.user_ad = res );
         console.log(this.user_ad.groups);
         localStorage.setItem('currentGroup',this.user_ad.groups.find(r => r === 'collaborators'));
         console.log(localStorage.getItem('currentGroup'));
         return true;
       }else {
         return false;
       }

     });

  }

  getUserInfo(trigrame: string): Observable<User_AD> {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.set('authorization', this.token.accessToken);

    return this.http.get('https://si-ad.intech.lu/users/by-trigram/' + trigrame, options ).map((res: Response) => res.json())


  }

}
