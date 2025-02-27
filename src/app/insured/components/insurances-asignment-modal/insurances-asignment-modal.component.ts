import { Component, inject, OnInit } from '@angular/core';
import { InsurancesService } from '../../../insurances/services/insurances.service';
import { Insurance } from '../../../insurances/interfaces/insurance.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { InsuredInsurancesService } from '../../../shared/services/insured-insurances.service';
import { SelectInsuredComponent } from '../select-insured/select-insured.component';
import { Insured } from '../../interfaces/insured.interface';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-insurances-asignment-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './insurances-asignment-modal.component.html',
  styleUrl: './insurances-asignment-modal.component.css'
})
export class InsurancesAsignmentModalComponent implements OnInit{

  public insurancesList: Insurance[] = []

  public insuranceSelectedCode: string = '';
  public insuredSelectedId: string = '';
  public insuredSelectedName: string = '';

  public insuranceSelectedData!: Insurance;
  public insuredSelectedData!: Insured;

  public dialogRef = inject(MatDialogRef<InsurancesAsignmentModalComponent>);

  constructor(private insurancesService: InsurancesService, 
              private insuranceInsuredService: InsuredInsurancesService,
              private dialog: MatDialog){}

  ngOnInit(): void {
    this.getInsurancesList();
  }

  getInsurancesList(){
    this.insurancesList = this.insurancesService.getInsurances();
  }

  
  
  openInsuredList(){
    const dialogRef = this.dialog.open(SelectInsuredComponent,
      {
        width:'700px',
        maxWidth:'800px',
        height:'80%'
      }
    );
    
    dialogRef.afterClosed().subscribe(res=>{
      this.insuredSelectedData = res;
      this.insuredSelectedName = this.insuredSelectedData.insuredName;
    })
  }

  getInsuranceSelectedByCode():Insurance{
    this.insuranceSelectedData = this.insurancesService.getInsuranceByCode(this.insuranceSelectedCode);
    return this.insuranceSelectedData;
  }

  saveInsuranceAssignment(){
    this.getInsuranceSelectedByCode();
    const shortId = uuidv4().substring(0,4);
    const assignmentData = {
      id: 'reg-'+shortId,
      ...this.insuranceSelectedData,
      ...this.insuredSelectedData,
      state: 'Active'
    }
    console.log('Asignación a guardar', assignmentData);
    this.insuranceInsuredService.assignInsurance(assignmentData);
    this.closeModal();
  }

  closeModal(){
    this.dialogRef.close();
  }
}
