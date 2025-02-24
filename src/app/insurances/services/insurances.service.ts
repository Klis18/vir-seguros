import { Injectable } from '@angular/core';
import { Insurance } from '../interfaces/insurance.interface';

type NewType = Insurance;

@Injectable({
  providedIn: 'root'
})
export class InsurancesService {

  public insurancesList: Insurance[]=[
    {
      insuranceCode: 'insu1',
      insuranceName: 'Seguros Gold',
      sumInsured: 2000,
      insuranceCost: 400
    },
    {
      insuranceCode: 'insu2',
      insuranceName: 'Seguros Pro',
      sumInsured: 1500,
      insuranceCost: 275
    },
    {
      insuranceCode: 'insu3',
      insuranceName: 'Seguros Vita',
      sumInsured: 700,
      insuranceCost: 100
    }
  ]

  constructor() { }

  getInsurances():Insurance[]{
    return this.insurancesList;
  }

  getInsuranceByCode(insuranceCode:string): Insurance{
    const index = this.insurancesList.findIndex(insurance => insurance.insuranceCode === insuranceCode);
    return this.insurancesList[index];
  }

  addInsurance(insurance:Insurance){
    this.insurancesList.push(insurance);
  }

  deleteInsurance(insuranceCode: string): void {
    this.insurancesList = this.insurancesList.filter(insurance => insurance.insuranceCode !== insuranceCode);
  }

  editInsurance(updatedInsurance: Insurance): void {
    const index = this.insurancesList.findIndex(insurance => insurance.insuranceCode === updatedInsurance.insuranceCode);
    if (index !== -1) {
      this.insurancesList[index] = updatedInsurance;
    }

  }
}
