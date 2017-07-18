import {Component, OnInit, Input} from '@angular/core';
import {VirtualMachine} from '../../../model/VM';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VmRequest} from '../../../model/VMrequest';
import {RequestsService} from '../../../_services/requests.service';
import {Router} from '@angular/router';
import {AdminComponent} from '../admin.component';



@Component({
  selector: 'app-edit-vm',
  templateUrl: './edit-vm.component.html',
  styleUrls: ['./edit-vm.component.scss']
})

export class EditVmComponent implements OnInit {
  @Input() vm: VirtualMachine;
  ngOnInit(): void {
    this.initVM();
  }


  private   vmrequest : VirtualMachine;
  public    form: FormGroup;
  private   id: AbstractControl;
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
  private   host: AbstractControl;
  private   vLan: AbstractControl;
  private   adaptater: AbstractControl;
  private   switchVirt: AbstractControl;
  private   status: AbstractControl;


  private   othersHard: AbstractControl;
  private   othersSoft: AbstractControl;
  private   error = null;
     loading = null;

  constructor(private fb: FormBuilder, private requestService: RequestsService, private router : Router, private admin: AdminComponent ){}

  initVM(){
    this.vmrequest = this.vm;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      'id' : [this.vmrequest.id, Validators.required],
      'vmName' : [this.vmrequest.vmName, Validators.required],
      'projectName' : [this.vmrequest.projectName, Validators.required],
      'vmOrigin' : [this.vmrequest.vmOrigin],
      'vmAdministrator' : [this.vmrequest.vmAdministrator, Validators.required],
      'projectManager' : [this.vmrequest.projectManager, Validators.required],
      'validityDate' : [this.vmrequest.validityDate.toUTCString(), Validators.required],

      'vCPU' : [this.vmrequest.vCPU, Validators.required],
      'memory' : [this.vmrequest.memory, Validators.required],
      'diskSpace' : [this.vmrequest.diskSpace, Validators.required],
      'othersHard': [this.vmrequest.othersHard],

      'os' : [this.vmrequest.os, Validators.required],
      'version' : [this.vmrequest.version, Validators.required],
      'backup' : [this.vmrequest.backup, Validators.required],
      'monitoring' : [this.vmrequest.monitoring, Validators.required],
      'othersSoft' : [this.vmrequest.othersSoft],
      'status': [] ,
      'ip' : [this.vmrequest.ip],
      'host' : [this.vmrequest.host],
      'vLan' : [this.vmrequest.vLan],
      'adaptater': [this.vmrequest.adaptater],
      'switchVirt': [this.vmrequest.switchVirt],
    });

    this.id = this.form.controls['id'];
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
    this.status = this.form.controls['status'];
    this.adaptater = this.form.controls['adaptater'];
    this.ip = this.form.controls['ip'];
    this.host = this.form.controls['host'];
    this.switchVirt = this.form.controls['switchVirt'];
    this.vLan = this.form.controls['vLan'];



  }

  onSubmit(vm: any) {
    this.loading = true;
    let vmToSend: VirtualMachine;

    vmToSend = vm;
    vmToSend.vMrequestjpa = new VmRequest();
    vmToSend.vMrequestjpa.status = vm.status;
    vmToSend.vMrequestjpa.id = vm.id;


    this.requestService.postRequestModification(vmToSend).subscribe(res => {
      if (res) {
        console.log(vmToSend.id + ' succesfully modified');
        this.admin.refresh('all');
      } else {
        this.error = true;
        console.log(vmToSend.id + ' not modified');
      }
    },
    error2 => { console.log(error2); this.error = true ; } );

    this.loading = false;
  }

}
