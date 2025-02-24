import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InsurancesTableComponent } from '../../components/insurances-table/insurances-table.component';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InsuranceModalComponent } from '../../components/insurance-modal/insurance-modal.component';

@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    InsurancesTableComponent
  ],
  templateUrl: './insurances.component.html',
  styleUrl: './insurances.component.css'
})
export class InsurancesComponent {
    readonly dialog = inject(MatDialog);
  

  constructor(){}

    addInsurance(){
      const dialogRef = this.dialog.open(InsuranceModalComponent,{
        data:{
          type: 'add'
        },
        width:'700px',
        maxWidth:'800px'
      });
      
      dialogRef.afterClosed().subscribe(res=>{
        console.log('modal cerrado');
      })
    }

}
