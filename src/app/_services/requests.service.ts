import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ARequest} from '../model/Request';



@Injectable()
export class RequestsService {
  options: RequestOptions;
  private url = 'http://infra-reqs-api.intech-lab.com/';
  constructor(private http: Http) {
    const headers = new Headers();

    headers.append('authorization ', localStorage.getItem('currentUser'));

    this.options = new RequestOptions({ headers: headers });
  }


  postRequest(r: ARequest): Observable<boolean> {
    return this.http.post(this.url + 'request', JSON.parse(JSON.stringify(r)), this.options).map((res: Response) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });
  }
  getRequests(): Observable<ARequest[]> {
    return this.http.get(this.url + 'request', this.options).map(res => res.json());
  }

}
