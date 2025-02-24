import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';

import { InsuredService } from '../../services/insured.service';
import { Insured } from '../../interfaces/insured.interface';
import { InsuredModalComponent } from '../insured-modal/insured-modal.component';

@Component({
  selector: 'app-insured-table',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './insured-table.component.html',
  styles: ``
})
export class InsuredTableComponent implements OnInit{

  public insuredList!: Insured[]

  constructor(private insuredService:InsuredService, private dialog:MatDialog){}

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

  editInsured(insuredId:string){
    const dialogRef = this.dialog.open(InsuredModalComponent,{
      data:{
        type:'edit',
        insuredId: insuredId
      },
      width: '700px',
      maxWidth:'800px',
      height:'55%'
    })

    dialogRef.afterClosed().subscribe(res=>{
      console.log('Modal editar, cerrado')
    })
  }



}
