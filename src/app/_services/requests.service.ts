import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class RequestsService {
  private url = 'http://infra-reqs-api.intech-lab.com/';
  constructor(private http: Http) { }


  postRequest(r: Request): Observable<boolean> {
    return this.http.post(this.url,JSON.parse(JSON.stringify(r))).map((res: Response) => {
      if (res.status === 200){
        return true;
      } else {
        return false;
      }
    });
  }
  getRequests(): Observable<Response> {
    return this.http.get(this.url + 'request').map((res: Response) => res)
  }

}
