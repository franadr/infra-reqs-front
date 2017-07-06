import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ARequest} from '../model/Request';



@Injectable()
export class RequestsService {

  private url = 'http://infra-reqs-api.intech-lab.com/';
  constructor(private http: Http) { }


  postRequest(r: ARequest): Observable<boolean> {
    return this.http.post(this.url + 'request', JSON.parse(JSON.stringify(r))).map((res: Response) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });
  }
  getRequests(): Observable<ARequest[]> {
    return this.http.get(this.url + 'request').map(res => res.json());
  }

}
