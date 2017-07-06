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
  public origin: AbstractControl;
  public content: AbstractControl;
  private error = null;
  private tri = localStorage.getItem('currentTri');



  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'origin' : [this.tri],
      'content' : ['', Validators.required],
    });
    this.origin = this.form.controls['origin'];
    this.content = this.form.controls['content'];
  }

  ngOnInit() {
  }

  onSubmit(req: any) {
    this.requestService.postRequest(req).subscribe((flag: boolean) => this.error = !flag)
  }

}
