import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InsuredInsuranceFiltersConsultComponent } from '../../components/insured-insurance-filters-consult/insured-insurance-filters-consult.component';
import { InsuredInsuranceTableConsultComponent } from '../../components/insured-insurance-table-consult/insured-insurance-table-consult.component';
import { InsurancesInsured } from '../../interfaces/insured-insurances.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    InsuredInsuranceFiltersConsultComponent,
    InsuredInsuranceTableConsultComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  public filteredList: InsurancesInsured[] = [];

  getFilteredData(event:InsurancesInsured[]){
    this.filteredList = event;
  }

}
