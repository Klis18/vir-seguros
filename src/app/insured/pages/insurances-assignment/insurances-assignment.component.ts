import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InsuredInsurancesTableComponent } from '../../components/insured-insurances-table/insured-insurances-table.component';

@Component({
  selector: 'app-insurances-assignment',
  standalone: true,
  imports: [
    InsuredInsurancesTableComponent,
    MatIconModule
  ],
  templateUrl: './insurances-assignment.component.html',
  styles: ``
})
export class InsurancesAssignmentComponent {

}
