import { Component, inject, OnInit } from '@angular/core';
import { InsurancesService } from '../../../insurances/services/insurances.service';
import { Insurance } from '../../../insurances/interfaces/insurance.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insurances-asignment-modal',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './insurances-asignment-modal.component.html',
  styleUrl: './insurances-asignment-modal.component.css'
})
export class InsurancesAsignmentModalComponent implements OnInit{

  public insurancesList: Insurance[] = []

  public dialogRef = inject(MatDialogRef<InsurancesAsignmentModalComponent>);

  constructor(private insurancesService: InsurancesService){}

  ngOnInit(): void {
    this.getInsurancesList();
  }

  getInsurancesList(){
    this.insurancesList = this.insurancesService.getInsurances();
  }

  closeModal(){
    this.dialogRef.close();
  }
}
