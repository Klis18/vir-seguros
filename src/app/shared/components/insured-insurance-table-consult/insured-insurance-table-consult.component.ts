import { Component, Input, OnInit } from '@angular/core';
import { InsuredInsurancesService } from '../../services/insured-insurances.service';
import { InsurancesInsured } from '../../interfaces/insured-insurances.interface';

@Component({
  selector: 'app-insured-insurance-table-consult',
  standalone: true,
  imports: [],
  templateUrl: './insured-insurance-table-consult.component.html',
  styles: ``
})
export class InsuredInsuranceTableConsultComponent{

  @Input()
  insuredInsuranceFilteredList: InsurancesInsured[] = [];

  // constructor(private insuredInsuranceService: InsuredInsurancesService){}

  // ngOnInit(): void {
  //   this.getFilteredList();
  // }

  // getFilteredList(){
  //   this.insuredInsuranceFilteredList = this.insuredInsuranceService.getListInsurancesInsuredAssignments();
  // }

}
