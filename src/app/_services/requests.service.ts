import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {VirtualMachine} from '../model/VM';
import {VmRequest} from '../model/VMrequest';
import {environment} from '../../environments/environment';



@Injectable()
export class RequestsService {


  private url = environment.apiUrl;
  constructor(private http: Http) {
  }

  postVMrequest(vmrequest: VirtualMachine): Observable<boolean> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.post(this.url + 'vmrequest/', JSON.parse(JSON.stringify(vmrequest)), options).map((res: Response) => {
      if (res.json() === true) {
        return true;
      } else {
        return false;
      }
    });
  }
  getVMrequest(filter: string): Observable<VirtualMachine[]> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'vmrequest/' + filter, options).map(res => res.json());
  }


  postRequestModification(vm: VirtualMachine): Observable<boolean> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'vmrequest/' + 'edit' , JSON.parse(JSON.stringify(vm)) , options).map(res => res.json());
  }

  getRequestByUser(uname: string): Observable<VirtualMachine[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('username', uname);
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    options.params = params;
    return this.http.get(this.url + 'vmrequest/' + 'userrequest', options).map(res => res.json());

  }
  postModificationRequest(vm: any): Observable<boolean> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:23456/' + 'vmedit/new' , JSON.parse(JSON.stringify(vm)) , options).map(res => res.json());
  }

  validateModification(id: any, accept: any): Observable<boolean> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    const params: URLSearchParams = new URLSearchParams();
    params.set('accept', accept);
    options.params = params;
    return this.http.get('http://localhost:23456/' + 'vmedit/' + id, options).map(res => res.json());
  }

  getModificationRequest(): Observable<VirtualMachine[]> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:23456/vmedit', options).map(res => res.json());
  }


}
