import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { InsurancesService } from '../../services/insurances.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-insurance-modal',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './insurance-modal.component.html',
  styles: ``
})
export class InsuranceModalComponent implements OnInit{

  public typeForm!: string;
  public insuranceForm!: FormGroup;
  data = inject(MAT_DIALOG_DATA);

  dialogRef = inject(MatDialogRef<InsuranceModalComponent>);

  constructor(private fb: FormBuilder, private insuranceService:InsurancesService){}
  ngOnInit(): void {
    this.insuranceForm = this.fb.group({
      insuranceCode:[''],
      insuranceName:[''],
      sumInsured:[],
      insuranceCost:[],
    })

    console.log(this.typeForm);

    this.data.type == 'edit'? this.typeForm = 'Editar' : this.typeForm = 'Agregar';

    console.log('insuranceCode: ', this.data.insuranceCode);

    const dataInsurance = this.insuranceService.getInsuranceByCode(this.data.insuranceCode);
    console.log(dataInsurance);

    this.data.type == 'edit'? this.insuranceForm.setValue(dataInsurance) : '';

  }

  onSubmit(){
    this.data.type == 'edit'? this.editInsurance() : this.addNewInsurance();
  }

  editInsurance(){
    this.insuranceService.editInsurance(this.insuranceForm.value);
    this.closeForm()
  }


  addNewInsurance(){
    const insuranceCode = 'insu-'+uuidv4().substring(0,4);
    const{insuranceName, sumInsured, insuranceCost} = this.insuranceForm.value;
    const newInsurance = {insuranceCode, insuranceName, sumInsured,insuranceCost};
    this.insuranceService.addInsurance(newInsurance);
    this.closeForm();
  }

  cleanForm(){
    this.insuranceForm.reset();
  }

  closeForm(){
    this.dialogRef.close()
  }

}
