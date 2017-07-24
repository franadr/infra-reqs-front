import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {VirtualMachine} from '../model/VM';
import {VmRequest} from '../model/VMrequest';
import {environment} from '../../environments/environment';
import {ResponseMessage} from '../model/ResponseMessage';
import {ThreadMessage} from "../model/ThreadMessage";



@Injectable()
export class RequestsService {


  private url = environment.apiUrl;
  constructor(private http: Http) {
  }

  postVMrequest(vmrequest: VirtualMachine): Observable<ResponseMessage> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.post(this.url + 'vmrequest/', JSON.parse(JSON.stringify(vmrequest)), options).map(res => res.json())
      .catch(err => err.getBody().json());
  }
  getVMrequest(filter: string): Observable<VirtualMachine[]> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'vmrequest/' + filter, options).map(res => res.json());
  }


  postRequestModification(vm: VirtualMachine): Observable<ResponseMessage> {
    const headers = new Headers();

    headers.append('authorization', localStorage.getItem('currentUser'));

    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'vmrequest/' + 'edit' , JSON.parse(JSON.stringify(vm)) , options).map(res => res.json())
      .catch(err => err.json());
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
  postModificationRequest(vm: any): Observable<ResponseMessage> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'vmedit/new' , JSON.parse(JSON.stringify(vm)) , options).map(res => res.json())
      .catch(err => err.json());
  }

  validateModification(id: any, accept: any): Observable<ResponseMessage> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    const params: URLSearchParams = new URLSearchParams();
    params.set('accept', accept);
    options.params = params;
    return this.http.get(this.url + 'vmedit/' + id, options).map(res => res.json())
      .catch(err => err.json());
  }

  getModificationRequest(): Observable<VirtualMachine[]> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'vmedit/' , options).map(res => res.json());
  }

  getDiscussionThread(vmId:number): Observable<ThreadMessage[]> {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('currentUser'));
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.url + 'vm_thread/' + vmId , options).map(res => res.json());
  }


}
