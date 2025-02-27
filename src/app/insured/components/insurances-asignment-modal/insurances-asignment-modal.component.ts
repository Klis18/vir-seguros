import { Component, inject, OnInit } from '@angular/core';
import { InsurancesService } from '../../../insurances/services/insurances.service';
import { Insurance } from '../../../insurances/interfaces/insurance.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { InsuredInsurancesService } from '../../../shared/services/insured-insurances.service';
import { InsurancesInsured } from '../../../shared/interfaces/insured-insurances.interface';

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

  public insureCodeSelected: string = '';


  public dialogRef = inject(MatDialogRef<InsurancesAsignmentModalComponent>);

  constructor(private insurancesService: InsurancesService, private insuranInsuredService: InsuredInsurancesService){}

  ngOnInit(): void {
    this.getInsurancesList();
  }

  getInsurancesList(){
    this.insurancesList = this.insurancesService.getInsurances();
  }

  closeModal(){
    this.dialogRef.close();
  }

  saveInsuranceAssignment(assignment:InsurancesInsured){
    this.insuranInsuredService.assignInsurance(assignment);
  }
}
