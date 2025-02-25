import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { InsuredTableComponent } from '../../components/insured-table/insured-table.component';
import { InsuredModalComponent } from '../../components/insured-modal/insured-modal.component';
import { MatDialog } from '@angular/material/dialog';

import * as XLSX from 'xlsx';
import { InsuredService } from '../../services/insured.service';
import { Insured } from '../../interfaces/insured.interface';
import { MassLoadingInsuredComponent } from '../../components/mass-loading-insured/mass-loading-insured.component';

@Component({
  selector: 'app-insured',
  standalone: true,
  imports: [
    MatIconModule,
    InsuredTableComponent,
    MassLoadingInsuredComponent
  ],
  templateUrl: './insured.component.html',
  styleUrl: './insured.component.css'
})
export class InsuredComponent {

  constructor(private dialog: MatDialog, private insuredService: InsuredService){}

  addInsured(){
    const dialogRef = this.dialog.open(InsuredModalComponent,{
          data:{
            type:'add',
          },
          width: '700px',
          maxWidth:'800px',
          height: '55%'
        })
    
        dialogRef.afterClosed().subscribe(res=>{
          console.log('Modal agregar, cerrado')
        })
  }

}
