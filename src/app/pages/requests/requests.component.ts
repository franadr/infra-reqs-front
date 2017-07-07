import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestsService} from '../../_services/requests.service';
import {VmRequest} from "../../model/VMrequest";


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  public form: FormGroup;
  public    vmName: AbstractControl;
  private   projectName: AbstractControl;
  private   vmOrigin: AbstractControl;        // LDAP
  private   vmAdministrator: AbstractControl; // LDAP
  private   projectManager: AbstractControl;   // LDAP
  private   validity: AbstractControl;
  private   memory: AbstractControl;
  private   vCPU: AbstractControl;
  private   diksSpace: AbstractControl;
  private   os: AbstractControl;
  private   version: AbstractControl;
  private   backup: AbstractControl;
  private   monitoring: AbstractControl;
  private   ip: AbstractControl;
  private   Host: AbstractControl;
  private   vLan: AbstractControl;
  private   adaptater: AbstractControl;
  private   switchVirt: AbstractControl;
  private   vmRequest: VmRequest;
  private   others: AbstractControl;
  private   error = null;




  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'vmName' : ['', Validators.required],
      'projectName' : ['', Validators.required],
      'vmOrigin' : [localStorage.getItem('ladp')],
      'vmAdministrator' : ['', Validators.required],
      'projectManager' : ['', Validators.required],
      'validity' : ['', Validators.required],

      'vCPU' : ['', Validators.required],
      'memory' : ['', Validators.required],
      'disksSpace' : ['', Validators.required],
      'others': [],

      'os' : ['', Validators.required],
      'version' : ['', Validators.required],
      'backup' : ['', Validators.required],
      'monitoring' : ['', Validators.required],
      'autres' : [],


    });
    this.vmName = this.form.controls['vmName'];
    this.projectManager = this.form.controls['projectManager'];
    this.vmOrigin = this.form.controls['vmOrigin'];
    this.vmAdministrator = this.form.controls['vmAdministrator'];
    this.projectManager = this.form.controls['projectManager'];
    this.validity = this.form.controls['validity'];

    this.vCPU = this.form.controls['vCPU'];
    this.diksSpace = this.form.controls['diksSpace'];
    this.memory = this.form.controls['memory'];
    this.others = this.form.controls['others'];

    this.os = this.form.controls['os'];
    this.version = this.form.controls['version'];
    this.backup = this.form.controls['backup'];
    this.others = this.form.controls['autres'];

  }

  ngOnInit() {
  }

  onSubmit(req: any) {
  // this.requestService.postRequest(req).subscribe((flag: boolean) => this.error = !flag)
}

}
