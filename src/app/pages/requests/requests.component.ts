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
  private error = false;
  private tri = localStorage.getItem('currentTri');



  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'origin' : {value : this.tri, disabled: true},
      'content' : ['', Validators.required],
    });
    this.origin = this.form.controls['origin'];
    this.content = this.form.controls['content'];
  }

  ngOnInit() {
  }

  onSubmit(req: any){
    this.requestService.postRequest(req).subscribe((flag: boolean) => this.error = !flag)
  }

}
