import { Injectable } from '@angular/core';
import { Insurance } from '../interfaces/insurance.interface';

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

  addInsurance(insurance:Insurance){
    this.insurancesList.push(insurance);
  }

  // Eliminar un seguro basado en el insuranceCode
  deleteInsurance(insuranceCode: string): void {
    this.insurancesList = this.insurancesList.filter(insurance => insurance.insuranceCode !== insuranceCode);
  }

  // Editar un seguro basado en el insuranceCode
  editInsurance(updatedInsurance: Insurance): void {
    const index = this.insurancesList.findIndex(insurance => insurance.insuranceCode === updatedInsurance.insuranceCode);
    if (index !== -1) {
      // Actualizar los valores del seguro encontrado
      this.insurancesList[index] = updatedInsurance;
    }
  }
}
