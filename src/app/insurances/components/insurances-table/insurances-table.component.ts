import { Component, inject, NgModule, OnInit } from '@angular/core';
import { InsurancesService } from '../../services/insurances.service';
import { Insurance } from '../../interfaces/insurance.interface';

import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { InsuranceModalComponent } from '../insurance-modal/insurance-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertsService } from '../../../shared/services/alerts.service';
import {MatTable, MatCell, MatRow, MatHeaderCell, MatHeaderRow, MatCellDef, MatRowDef, MatHeaderRowDef} from '@angular/material/table'


@Component({
  selector: 'app-insurances-table',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    CommonModule,
    FormsModule,

    MatTable,
    MatCell,
    MatRow,
    MatHeaderCell,
    MatHeaderRow,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './insurances-table.component.html',
  styles: ``
})
export class InsurancesTableComponent implements OnInit{

  public insurances!: Insurance[];
  readonly dialog = inject(MatDialog);


  constructor(private insurancesService: InsurancesService, private alertService: AlertsService){}

  //Paginación
  itemsPerPage!:number; 
  currentPage!:number; 
  totalPages !:number;
  
  ngOnInit(): void {
   this.getListInsurance();
    this.itemsPerPage = 5;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.insurances.length / this.itemsPerPage);
  }

  getListInsurance(){
    this.insurances = this.insurancesService.getInsurances();
  }

  deleteInsurance(insuranceCode:string){
    try {
      this.insurancesService.deleteInsurance(insuranceCode);
      this.getListInsurance();
      this.alertService.showAlertSuccesMessage('eliminado');
    } catch (error) {
      this.alertService.showAlertErrorMessage('eliminar');
    }
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
    })
  }

  getPageData(){
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return this.insurances.slice(start,end);
  }

  changePage(page:number){
    if(page>=1 && page<=this.totalPages){
      this.currentPage = page;
    }else{
      this.currentPage = 1;
    }
  }

}
