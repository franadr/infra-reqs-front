import {VmRequest} from './VMrequest';
/**
 * Created by Adriano on 07/07/2017.
 */


export class VirtualMachine {

  private   id: number;
  private   vmName: string;
  private   projectName: string;
  private   vmOrigin: string;        // LDAP
  private   vmAdministrator: string; // LDAP
  private   projectManager: string;   // LDAP
  private   validity: Date;
  private   memory: number;
  private   vCPU: number;
  private   diksSpace: number;
  private   os: string;
  private   version: string;
  private   backup: boolean;
  private   monitoring: boolean;
  private   ip: string;
  private   Host: string;
  private   vLan: string;
  private   adaptater: string;
  private   switchVirt: string;
  private   vmRequest: VmRequest;
  private   others: string;
}
