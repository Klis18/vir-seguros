import { Component } from '@angular/core';
import { InsurancesService } from '../../services/insurances.service';
import { Insurance } from '../../interfaces/insurance.interface';

@Component({
  selector: 'app-mass-loading-insurances',
  standalone: true,
  imports: [],
  templateUrl: './mass-loading-insurances.component.html',
  styles: ``
})
export class MassLoadingInsurancesComponent {

  constructor(private insurancesService: InsurancesService){}

  addMassiveInsurances(insurance:Insurance){
    this.insurancesService.addInsurance(insurance);
  }

  readTxt(event:any):void{
    const archivo = event.target.files[0];

    if(archivo){
      const lector = new FileReader();

      lector.onload = (e:any) =>{
        const contenido = e.target.result;
        const lineas = contenido.split('\n');

        lineas.forEach((linea:any, index:number) => {

          const columnas = linea.split(',');

          if(columnas.length === 4){
            const insuranceCode = columnas[0];
            const insuranceName = columnas[1];
            const sumInsured = columnas[2];
            const insuranceCost = columnas[3];
            const insuranceData = {insuranceCode,insuranceName, sumInsured ,insuranceCost}
            this.addMassiveInsurances(insuranceData);
          }else{
          }
        });
      };

      lector.readAsText(archivo);
    }else{
    }


  }

}
