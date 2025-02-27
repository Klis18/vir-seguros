import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { InsuredService } from '../../services/insured.service';

@Component({
  selector: 'app-insured-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './insured-modal.component.html',
  styles: ``
})
export class InsuredModalComponent implements OnInit{

  public insuredForm!: FormGroup;
  public typeForm!: string;
  public data = inject(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<InsuredModalComponent>);
  

  constructor(private fb: FormBuilder, private insuredService: InsuredService){}

  ngOnInit(): void {
    this.insuredForm = this.fb.group({
      insuredId : ['', [Validators.required, Validators.minLength(10)]],
      insuredName:['', [Validators.required]],
      phone:['', [Validators.required]],
      age:['', [Validators.required]]
    });

    this.data.type == 'edit' ? this.typeForm = 'Editar' : this.typeForm = 'Agregar';

    const insuredData = this.insuredService.getInsured(this.data.insuredId);

    this.data.type == 'edit' ? this.insuredForm.setValue(insuredData) : '';

  }

  onSubmit(){
    this.data.type == 'edit' ? this.editInsured() : this.addInsured();
  }

  addInsured(){
    this.insuredService.addInsured(this.insuredForm.value);
    this.dialogRef.close();
  }

  editInsured(){
    this.insuredService.updateInsured(this.insuredForm.value);
    this.dialogRef.close();
  }

  cleanForm(){
    this.insuredForm.reset();
  }

  closeForm(){
    this.dialogRef.close()
  }
}
