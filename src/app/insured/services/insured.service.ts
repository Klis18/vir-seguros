import { Injectable } from '@angular/core';
import { Insured } from '../interfaces/insured.interface';

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  public insuredList : Insured[] = [
    {
      insuredId: '0996716599',
      insuredName: 'Lia Valenzuela',
      phone: '0997685674',
      age: '32'
    },
    {
      insuredId: '0967845654',
      insuredName: 'Roberto Sandoval',
      phone: '0998887675',
      age: '29'
    },
    {
      insuredId: '0912343432',
      insuredName: 'Laura Benavides',
      phone: '0992276765',
      age: '45'
    }
  ]

  getInsuredList():Insured[]{
    const insuredDataLocalStorage = localStorage.getItem('insuredList');
    if(insuredDataLocalStorage){
      this.insuredList = JSON.parse(insuredDataLocalStorage);
    }
    return this.insuredList;
  }

  getInsured(insuredCode: string):Insured{
    const index = this.insuredList.findIndex(insured => insured.insuredId == insuredCode);
    return this.insuredList[index];
  }

  addInsured(insured:Insured){
    this.insuredList.push(insured);
    this.saveInLocalStorage();
  }

  deleteInsured(insuredId:string){
    this.insuredList = this.insuredList.filter(insured => insured.insuredId !== insuredId);
    this.saveInLocalStorage();
  }

  updateInsured(updateInsured: Insured){
    const index = this.insuredList.findIndex(insured => insured.insuredId === updateInsured.insuredId);
    if(index!==-1){
      this.insuredList[index]= updateInsured;
    }
    this.saveInLocalStorage();
  }

  saveInLocalStorage(){
    localStorage.setItem('insuredList',JSON.stringify(this.insuredList));
  }
}
