import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InsuredInsurancesTableComponent } from '../../components/insured-insurances-table/insured-insurances-table.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InsurancesAsignmentModalComponent } from '../../components/insurances-asignment-modal/insurances-asignment-modal.component';

@Component({
  selector: 'app-insurances-assignment',
  standalone: true,
  imports: [
    InsuredInsurancesTableComponent,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './insurances-assignment.component.html',
  styles: ``
})
export class InsurancesAssignmentComponent {

  constructor(private dialog:MatDialog){}


  addAsignment(){
    const dialogRef = this.dialog.open(InsurancesAsignmentModalComponent,
      {
        width:'700px',
        maxWidth: '800px',
        height: '45%',
      }
    );

    dialogRef.afterClosed().subscribe(
      res => {
        console.log('modal cerrado');
      }
    )
  }

}
