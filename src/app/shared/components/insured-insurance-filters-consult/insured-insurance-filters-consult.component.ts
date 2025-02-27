import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { InsuredInsurancesService } from '../../services/insured-insurances.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsurancesInsured } from '../../interfaces/insured-insurances.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-insured-insurance-filters-consult',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './insured-insurance-filters-consult.component.html',
  styles: ``
})
export class InsuredInsuranceFiltersConsultComponent implements OnInit{

  @Output()
  sendFilteredData: EventEmitter<InsurancesInsured[]> = new EventEmitter<InsurancesInsured[]>;
  public insuredId     : string = '';
  public insuranceCode : string = '';
  public filteredList: InsurancesInsured[] = [];
  public filtersForm!: FormGroup;
  public typeSearch: string = ''; 

  constructor(private insuredInsuranceService:InsuredInsurancesService, private fb: FormBuilder){}

  
  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      insuredId: [''],
      insuranceCode: ['']
    });
  }

  onSubmit(){
    const insuredId = this.filtersForm.get('insuredId')?.value;
    const insuranceCode = this.filtersForm.get('insuranceCode')?.value;
    switch(this.typeSearch){
      case 'insuredId':
        const filteredDataByInsuredId = this.insuredInsuranceService.getListInsurancesInsuredByInsuredId(insuredId);
        this.sendFilteredData.emit(filteredDataByInsuredId);
        break;
      case 'insuranceCode':
        const filteredDataByInsuranceCode = this.insuredInsuranceService.getListInsuredInsurancesByInsuranceCode(insuranceCode);
        this.sendFilteredData.emit(filteredDataByInsuranceCode);
        break;
      default:
        ''
        break;
    }

  }


}
