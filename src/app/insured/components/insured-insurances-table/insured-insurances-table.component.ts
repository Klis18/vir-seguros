import { Component, OnInit } from '@angular/core';
import { InsuredInsurancesService } from '../../../shared/services/insured-insurances.service';
import { InsurancesInsured } from '../../../shared/interfaces/insured-insurances.interface';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insured-insurances-table',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './insured-insurances-table.component.html',
  styleUrl: './insured-insurances-table.component.css'
})
export class InsuredInsurancesTableComponent implements OnInit{

  public insuranceInsuredData!: InsurancesInsured[];

    //Paginación
    itemsPerPage!:number; 
    currentPage!:number; 
    totalPages !:number;
  

  constructor(private insuredInsurancesService:InsuredInsurancesService){}

  ngOnInit(){
    this.insuranceInsuredData = this.getInsuredInsuranceList();

    this.itemsPerPage = 5;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.insuranceInsuredData.length / this.itemsPerPage);
  }

  getInsuredInsuranceList(){
    return this.insuredInsurancesService.getListInsurancesInsuredAssignments();
  }

  deleteInsuredInsurance(id:string){
    this.insuredInsurancesService.updateStatusInsuranceInsured(id);
  }

  getPageData(){
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return this.insuranceInsuredData.slice(start,end);
  }

  changePage(page:number){
    if(page>=1 && page<=this.totalPages){
      this.currentPage = page;
    }
    else{
      this.currentPage = 1;
    }
  }

}
