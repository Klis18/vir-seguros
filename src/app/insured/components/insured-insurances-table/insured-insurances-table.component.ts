import { Component, OnInit } from '@angular/core';
import { InsuredInsurancesService } from '../../../shared/services/insured-insurances.service';
import { InsurancesInsured } from '../../../shared/interfaces/insured-insurances.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-insured-insurances-table',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './insured-insurances-table.component.html',
  styleUrl: './insured-insurances-table.component.css'
})
export class InsuredInsurancesTableComponent implements OnInit{

  public insuranceInsuredData!: InsurancesInsured[];

  constructor(private insuredInsurancesService:InsuredInsurancesService){}

  ngOnInit(){
    this.insuranceInsuredData = this.getInsuredInsuranceList();
  }

  getInsuredInsuranceList(){
    return this.insuredInsurancesService.getListInsurancesInsuredAssignments();
  }

}
