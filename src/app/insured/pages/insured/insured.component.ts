import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { InsuredTableComponent } from '../../components/insured-table/insured-table.component';
import { InsuredModalComponent } from '../../components/insured-modal/insured-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-insured',
  standalone: true,
  imports: [
    MatIconModule,
    InsuredTableComponent
  ],
  templateUrl: './insured.component.html',
  styleUrl: './insured.component.css'
})
export class InsuredComponent {

  constructor(private dialog: MatDialog){}

  addInsured(){
    const dialogRef = this.dialog.open(InsuredModalComponent,{
          data:{
            type:'add',
          },
          width: '700px',
          maxWidth:'800px'
        })
    
        dialogRef.afterClosed().subscribe(res=>{
          console.log('Modal agregar, cerrado')
        })
  }
}
