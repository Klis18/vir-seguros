import { Component, Input, OnInit } from '@angular/core';
import { InsurancesInsured } from '../../interfaces/insured-insurances.interface';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insured-insurance-table-consult',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './insured-insurance-table-consult.component.html',
  styles: ``
})
export class InsuredInsuranceTableConsultComponent implements OnInit{

  @Input()
  insuredInsuranceFilteredList: InsurancesInsured[] = [];

  //Paginación
  itemsPerPage!:number; 
  currentPage!:number; 
  totalPages !:number;

  ngOnInit(){
    this.itemsPerPage = 5;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.insuredInsuranceFilteredList.length / this.itemsPerPage);
  }

  getPageData(){
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return this.insuredInsuranceFilteredList.slice(start,end);
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
