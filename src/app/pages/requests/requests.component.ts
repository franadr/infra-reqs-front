import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestsService} from '../../_services/requests.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  public form: FormGroup;
  public trigram: AbstractControl;
  public content: AbstractControl;
  private error = false;



  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'trigram' : ['', Validators.required],
      'content' : ['', Validators.required],
    });
    this.trigram = this.form.controls['trigram'];
    this.content = this.form.controls['content'];
  }

  ngOnInit() {
  }

  onSubmit(req: any){
    this.requestService.postRequest(req).subscribe((flag: boolean) => this.error = flag)
  }

}
