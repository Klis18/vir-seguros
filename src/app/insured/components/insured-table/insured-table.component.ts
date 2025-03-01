import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { InsuredService } from '../../services/insured.service';
import { Insured } from '../../interfaces/insured.interface';
import { InsuredModalComponent } from '../insured-modal/insured-modal.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-insured-table',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './insured-table.component.html',
  styles: ``
})
export class InsuredTableComponent implements OnInit {

  @Output()
  sendInsuredCodeSelected: EventEmitter<string> = new EventEmitter<string>;

  @Input()
  tableType: string = '';

  public insuredList!: Insured[]

  //Paginación
  itemsPerPage!: number;
  currentPage!: number;
  totalPages !: number;

  constructor(private insuredService: InsuredService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInsuredList();

    this.itemsPerPage = 5;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.insuredList.length / this.itemsPerPage);
  }

  getInsuredList() {
    this.insuredList = this.insuredService.getInsuredList();
  }

  sendInsured(insuredId: string) {
    this.sendInsuredCodeSelected.emit(insuredId);
  }

  deleteInsured(insuredId: string) {
    this.insuredService.deleteInsured(insuredId);
    this.getInsuredList();
    this.showAlertMessage('eliminado');
  }

  editInsured(insuredId: string) {
    const dialogRef = this.dialog.open(InsuredModalComponent, {
      data: {
        type: 'edit',
        insuredId: insuredId
      },
      width: '700px',
      maxWidth: '800px',
      height: '55%'
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log('Modal editar, cerrado')
    })
  }

  getPageData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return this.insuredList.slice(start, end);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    else {
      this.currentPage = 1;
    }
  }

  showAlertMessage(text: string) {
    Swal.fire({
      title: 'Excelente!',
      text: 'Se ha ' + text + ' el registro exitosamente',
      icon: 'success',
      confirmButtonText: 'ok'
    })
  }


}
