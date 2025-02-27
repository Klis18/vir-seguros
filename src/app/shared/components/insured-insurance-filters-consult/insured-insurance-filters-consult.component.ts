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
        this.filterInsuranceInsuredByInsuredId(insuredId);
        this.sendFilteredData.emit(this.filteredList);
        break;
      case 'insuranceCode':
        this.filterInsuredInsuranceByInsuranceCode(insuranceCode);
        this.sendFilteredData.emit(this.filteredList);
        break;
      default:
        ''
        break;
    }

  }

  filterInsuranceInsuredByInsuredId(insuredId: string){
    console.log('Dato asegurado obtenido', insuredId);
    this.filteredList = this.insuredInsuranceService.getListInsurancesInsuredByInsuredId(insuredId);
    console.log('Lista filtrada por id de asegurado', this.filteredList);
  }

  filterInsuredInsuranceByInsuranceCode(insuranceCode: string){
    console.log('Dato seguro obtenido', insuranceCode);
    this.filteredList = this.insuredInsuranceService.getListInsuredInsurancesByInsuranceCode(insuranceCode);
    console.log('Lista filtrada por código de seguro', this.filteredList);
  }

  // getListFiltered(insuredId:string, insurancesCode:string){
  //   this.filteredList = this.insuredInsuranceService.getListFiltered(insuredId, insurancesCode);
  //   this.sendFilteredData.emit(this.filteredList);
  // }

  getAllInsuredInsuranList(){
    this.insuredInsuranceService.getListInsurancesInsuredAssignments();
  }


}
