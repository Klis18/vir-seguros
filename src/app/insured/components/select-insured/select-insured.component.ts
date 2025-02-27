import { Component, inject } from '@angular/core';
import { InsuredTableComponent } from '../insured-table/insured-table.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Insured } from '../../interfaces/insured.interface';
import { InsuredService } from '../../services/insured.service';

@Component({
  selector: 'app-select-insured',
  standalone: true,
  imports: [
    InsuredTableComponent
  ],
  templateUrl: './select-insured.component.html',
  styles: ``
})
export class SelectInsuredComponent {

  id: string = '';
  insuredSelectedData!: Insured;
  dialogRef = inject(MatDialogRef<SelectInsuredComponent>);

  constructor(private insuredService: InsuredService){}

  getIdInsuredSelected(event:string){
    this.id = event;
    this.getInsuredById(this.id)
    this.dialogRef.close(this.insuredSelectedData);
  }

  getInsuredById(id: string):Insured{
    this.insuredSelectedData = this.insuredService.getInsured(id);
    return this.insuredSelectedData;
  }

}
