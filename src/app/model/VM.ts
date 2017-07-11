/**
 * Created by Adriano on 07/07/2017.
 */


export class VirtualMachine {

  id: number;
  vmName: string;
     projectName: string;
     vmOrigin: string;        // LDAP
     vmAdministrator: string; // LDAP
     projectManager: string;   // LDAP
     validityDate: Date;
     memory: number;
     vCPU: number;
     diskSpace: number;
     os: string;
     version: string;
     backup: boolean;
     monitoring: boolean;
     ip: string;
     host: string;
     vLan: string;
     adaptater: string;
     switchVirt: string;
     vMrequestjpa: any;
     othersHard: string;
     othersSoft: string;

     public convertDate(millis: number): Date {
       const res = new Date(millis);
       return res;
     }
}
