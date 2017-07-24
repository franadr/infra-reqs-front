import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../_services/requests.service';
import {VirtualMachine} from '../../model/VM';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ResponseMessage} from '../../model/ResponseMessage';
import {ThreadMessage} from '../../model/ThreadMessage';

@Component({
  selector: 'app-request-modification',
  templateUrl: './request-modification.component.html',
  styleUrls: ['./request-modification.component.scss']
})
export class RequestModificationComponent implements OnInit {

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

  private vmList: VirtualMachine[];

  error = false;
  errorMessage = '';
  uname = localStorage.getItem('ladp');
  vmrequest: VirtualMachine;
  threadMessage: ThreadMessage[];

  constructor(private requestService: RequestsService, private fb: FormBuilder) { }


  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.requestService.getRequestByUser(localStorage.getItem('ladp')).subscribe(res => {
      if ( res.length > 0) {
        this.vmList = res;
        this.vmList.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      }
    },
      error2 => {
        if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
        } else { window.alert(error2); }
      });
  }

  selectEdit(vm: any) {
    this.vmrequest = vm;
    this.createForm();
    this.requestService.getDiscussionThread(this.vmrequest.id).subscribe(res => {
      this.threadMessage = res;
      this.threadMessage.forEach(m => m.date = new Date(m.date));
    });
  }

  orderTable(filter: string) {
  }

  createForm() {
    console.log(this.parseDateString(this.vmrequest.validityDate));
    this.form = this.fb.group({
      'id': [this.vmrequest.id, Validators.required],
      'vmName': [this.vmrequest.vmName, Validators.required],
      'projectName': [this.vmrequest.projectName, Validators.required],
      'vmOrigin': [this.vmrequest.vmOrigin],
      'vmAdministrator': [this.vmrequest.vmAdministrator, Validators.required],
      'projectManager': [this.vmrequest.projectManager, Validators.required],
      'validityDate': [this.parseDateString(this.vmrequest.validityDate), Validators.required],

      'vCPU': [this.vmrequest.vCPU, Validators.required],
      'memory': [this.vmrequest.memory, Validators.required],
      'diskSpace': [this.vmrequest.diskSpace, Validators.required],
      'othersHard': [this.vmrequest.othersHard],

      'os': [this.vmrequest.os, Validators.required],
      'version': [this.vmrequest.version, Validators.required],
      'backup': [this.vmrequest.backup, Validators.required],
      'monitoring': [this.vmrequest.monitoring, Validators.required],
      'othersSoft': [this.vmrequest.othersSoft],
      'status': new FormControl({value: this.vmrequest.vMrequestjpa.status, disabled: true}),
      'ip': [this.vmrequest.ip],
      'host': [this.vmrequest.host],
      'vLan': [this.vmrequest.vLan],
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
    this.requestService.postModificationRequest(vm).subscribe(res => {
      if ( res) {
        console.log('mod ok id :' + vm.id);
        this.vmrequest = null;
        window.alert('La demande de modification a  été envoyée');
      }else {
        console.log('mod not ok');
        window.alert('La demande n a pas été envoyée');
      }
    },
      error2 => window.alert('La demande n a pas été envoyée :\n' + error2.content));
  }

  clearEdit(){
    this.vmrequest = null;
  }

  sendMessage(content: string) {
    const messageToSend = new ThreadMessage();
    messageToSend.date = new Date(Date.now());
    messageToSend.content = content;
    messageToSend.origin = localStorage.getItem('ladp');

    this.requestService.postThreadMessage(messageToSend, this.vmrequest.id).subscribe(res => {
        if (res) {
          console.log('Message sent for vn ' + this.vmrequest.id);
          window.alert('Message envoyé pour la vm ' + this.vmrequest.id);
          this.vmrequest = null;
        } else {
          this.error = true;
          console.log('message non envoyé');
        }
      },
      error2 => window.alert('Erreur :' + error2))
  }

  parseDateString(date: Date): string {

    let result = '';
    let resultMonth = '';
    let resultDay = '';
    result += this.vmrequest.validityDate.getFullYear() + '-';
    if (date.getMonth() + 1 < 10){
      console.log(date.getMonth());
      resultMonth = '0' + (date.getMonth() + 1);
    } else {
      resultMonth = date.getMonth().toString();
    }

    if (date.getDate() < 10){
      resultDay = '0' + date.getDate();
    } else {
      resultDay = date.getDate().toString();
    }
    result += resultMonth + '-' + resultDay;
    return result;
  }



}
