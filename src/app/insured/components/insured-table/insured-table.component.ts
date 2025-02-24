import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InsuredService } from '../../services/insured.service';
import { Insured } from '../../interfaces/insured.interface';

@Component({
  selector: 'app-insured-table',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './insured-table.component.html',
  styles: ``
})
export class InsuredTableComponent implements OnInit{

  public insuredList!: Insured[]

  constructor(private insuredService:InsuredService){}

  ngOnInit(): void {
    this.getInsuredList();
  }

  getInsuredList(){
    this.insuredList = this.insuredService.getInsuredList();
  }

  deleteInsured(insuredId: string){
    this.insuredService.deleteInsured(insuredId);
    this.getInsuredList();
  }



}
