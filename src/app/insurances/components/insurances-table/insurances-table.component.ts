import { Component, inject, OnInit } from '@angular/core';
import { InsurancesService } from '../../services/insurances.service';
import { Insurance } from '../../interfaces/insurance.interface';

import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { DialogModule } from '@angular/cdk/dialog';
import { InsuranceModalComponent } from '../insurance-modal/insurance-modal.component';

@Component({
  selector: 'app-insurances-table',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './insurances-table.component.html',
  styles: ``
})
export class InsurancesTableComponent implements OnInit{

  public insurances!: Insurance[];
  readonly dialog = inject(MatDialog);


  constructor(private insurancesService: InsurancesService){}

  ngOnInit(): void {
   this.getListInsurance();
  }

  getListInsurance(){
    this.insurances = this.insurancesService.getInsurances();
  }

  deleteInsurance(insuranceCode:string){
    this.insurancesService.deleteInsurance(insuranceCode);
    this.getListInsurance();
  }

  editInsurance(insuranceCode: string){
    const dialogRef = this.dialog.open(InsuranceModalComponent,{
      data:{
        type: 'edit',
        insuranceCode: insuranceCode
      },
      width:'700px',
      maxWidth:'800px',
      height:'55%'
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log('modal cerrado');
    })
  }

}
