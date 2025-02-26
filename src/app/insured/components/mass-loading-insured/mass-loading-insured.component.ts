import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { InsuredService } from '../../services/insured.service';
import { Insured } from '../../interfaces/insured.interface';

@Component({
  selector: 'app-mass-loading-insured',
  standalone: true,
  imports: [],
  templateUrl: './mass-loading-insured.component.html',
  styles: ``
})
export class MassLoadingInsuredComponent {

  constructor(private insuredService: InsuredService){}

  addMasiveInsured(insured:Insured){
    console.log('Insured agregado por carga masiva',insured);
      this.insuredService.addInsured(insured);
  }
  
  readExcel(event:any):void{
    const archivo = event.target.files[0];

    if(archivo){
      const lector = new FileReader();

      lector.onload = (e : any) => {
        const datos = e.target.result;
        const libro = XLSX.read(datos, {type: 'array'});

        const hoja = libro.Sheets[libro.SheetNames[0]];
        const datosExcel = XLSX.utils.sheet_to_json(hoja, {header:1});

        datosExcel.forEach((fila:any, index:number) => {
          if(index>0 && fila.length === 4){
            const insuredId = fila[0];
            const insuredName = fila[1];
            const phone = fila[2];
            const age = fila[3];
            const insuredData = {insuredId,insuredName,phone,age};
            this.addMasiveInsured(insuredData);
          }else {
            console.log(`Fila ${index + 1} no tiene 4 columnas.`);
          }
        });
      };
      lector.readAsArrayBuffer(archivo);
    }
  }

}
