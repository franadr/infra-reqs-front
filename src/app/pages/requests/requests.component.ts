import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestsService} from '../../_services/requests.service';
import {VmRequest} from '../../model/VMrequest';
import {VirtualMachine} from '../../model/VM';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  public    form: FormGroup;
  public    vmName: AbstractControl;
  private   projectName: AbstractControl;
  private   vmOrigin: AbstractControl;        // LDAP
  private   vmAdministrator: AbstractControl; // LDAP
  private   projectManager: AbstractControl;   // LDAP
  private   validityDate: AbstractControl;
  private   memory: AbstractControl;
  private   vCPU: AbstractControl;
  private   diskSpace: AbstractControl;
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

  private   othersHard: AbstractControl;
  private   othersSoft: AbstractControl;
  private   error = null;




  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'vmName' : ['', Validators.required],
      'projectName' : ['', Validators.required],
      'vmOrigin' : [localStorage.getItem('ladp')],
      'vmAdministrator' : ['', Validators.required],
      'projectManager' : ['', Validators.required],
      'validityDate' : ['', Validators.required],

      'vCPU' : ['', Validators.required],
      'memory' : ['', Validators.required],
      'diskSpace' : ['', Validators.required],
      'othersHard': [],

      'os' : ['', Validators.required],
      'version' : ['', Validators.required],
      'backup' : ['', Validators.required],
      'monitoring' : ['', Validators.required],
      'othersSoft' : [],
    });


    this.vmName = this.form.controls['vmName'];
    this.projectManager = this.form.controls['projectManager'];
    this.vmOrigin = this.form.controls['vmOrigin'];
    this.vmAdministrator = this.form.controls['vmAdministrator'];
    this.projectName = this.form.controls['projectName'];
    this.validityDate = this.form.controls['validityDate'];

    this.vCPU = this.form.controls['vCPU'];
    this.diskSpace = this.form.controls['diskSpace'];
    this.memory = this.form.controls['memory'];
    this.othersHard = this.form.controls['othersHard'];

    this.os = this.form.controls['os'];
    this.version = this.form.controls['version'];
    this.backup = this.form.controls['backup'];
    this.monitoring = this.form.controls['monitoring'];
    this.othersSoft = this.form.controls['othersSoft'];

  }

  ngOnInit() {
  }

  onSubmit(req: VirtualMachine) {
  this.requestService.postVMrequest(req).subscribe(res => {
    this.error = !res;
  })
}

}
