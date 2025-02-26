import { Injectable } from '@angular/core';
import { InsurancesInsured } from '../interfaces/insured-insurances.interface';

@Injectable({
  providedIn: 'root'
})
export class InsuredInsurancesService {

  public insuredInsurancesList: InsurancesInsured[] = [
    {
      id: 'reg1',
      insuranceCode: 'insu1',
      insuranceName: 'Seguros Gold',
      sumInsured: 2000,
      insuranceCost: 400,
      insuredId: '0967845654',
      insuredName: 'Roberto Sandoval',
      phone: '0998887675',
      age: '29',
      state: 'Active'
    },
    {
      id: 'reg2',
      insuranceCode: 'insu1',
      insuranceName: 'Seguros Gold',
      sumInsured: 2000,
      insuranceCost: 400,
      insuredId: '0912343432',
      insuredName: 'Laura Benavides',
      phone: '0992276765',
      age: '45',
      state: 'Active'
    },
    {
      id: 'reg3',
      insuranceCode: 'insu3',
      insuranceName: 'Seguros Vita',
      sumInsured: 700,
      insuranceCost: 100,
      insuredId: '0967845654',
      insuredName: 'Roberto Sandoval',
      phone: '0998887675',
      age: '29',
      state: 'Active'
    }
  ];

  constructor() { }

  getListInsurancesInsuredAssignments():InsurancesInsured[]{
    return this.insuredInsurancesList;
  }

  assignInsurance(insurancesInsured:InsurancesInsured){
    this.insuredInsurancesList.push(insurancesInsured);
  }
  
  updateStatusInsuranceInsured(insuranceInsuredId:string){
    const index = this.insuredInsurancesList.findIndex(register => register.id === insuranceInsuredId );
    if(index!==-1){
      this.insuredInsurancesList[index].state = 'Inactive';
    }
  }

  getListInsurancesInsuredByInsuredId(insuredId: string){
    this.insuredInsurancesList = this.insuredInsurancesList.filter(register => register.insuredId === insuredId);
  }

  getListInsuredInsurancesByInsuranceCode(insuranceCode: string){
    this.insuredInsurancesList = this.insuredInsurancesList.filter(register => register.insuranceCode === insuranceCode);
  }

  
}
