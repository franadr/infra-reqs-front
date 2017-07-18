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
     projectName: AbstractControl;
     vmOrigin: AbstractControl;        // LDAP
     vmAdministrator: AbstractControl; // LDAP
     projectManager: AbstractControl;   // LDAP
     validityDate: AbstractControl;
     memory: AbstractControl;
     vCPU: AbstractControl;
     diskSpace: AbstractControl;
     os: AbstractControl;
     version: AbstractControl;
     backup: AbstractControl;
     monitoring: AbstractControl;
     ip: AbstractControl;
     Host: AbstractControl;
     vLan: AbstractControl;
     adaptater: AbstractControl;
     switchVirt: AbstractControl;
     vmRequest: VmRequest;

     othersHard: AbstractControl;
     othersSoft: AbstractControl;
     error = null;




  constructor(fb: FormBuilder, private requestService: RequestsService) {
    this.form = fb.group({
      'vmName' : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'projectName' : ['', Validators.required],
      'vmOrigin' : [localStorage.getItem('ladp'), Validators.compose([Validators.required, Validators.minLength(3)])],
      'vmAdministrator' : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'projectManager' : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'validityDate' : ['', Validators.compose([Validators.required])],

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
    window.alert('VM request has been sent');
  },
    error2 => {
    if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
    } else { window.alert(error2); }

    });
  this.form.reset();
}

}
