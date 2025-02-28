import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      insuranceName:['', [Validators.required, Validators.minLength(4)]],
      sumInsured:[0, [Validators.required, Validators.min(20)]],
      insuranceCost:[0, [Validators.required, Validators.min(30)]],
    })

    this.data.type == 'edit'? this.typeForm = 'Editar' : this.typeForm = 'Agregar';

    const dataInsurance = this.insuranceService.getInsuranceByCode(this.data.insuranceCode);

    this.data.type == 'edit'? this.insuranceForm.setValue(dataInsurance) : '';

  }

  onSubmit(){
    if(this.insuranceForm.valid){
      this.data.type == 'edit'? this.editInsurance() : this.addNewInsurance();
    }
    console.log('Formulario invalido')
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

  verifyFormErrors(campoName:string):boolean{
    if(this.insuranceForm.get(campoName)?.touched && this.insuranceForm.get(campoName)?.invalid) {
      return true;
    } 
    return false;
  }

  showFormAlertMessage(campoName: string){
    const controlForm = this.insuranceForm.get(campoName);
    if (!controlForm) return '';

    const errors = controlForm.errors;

    const errorsMessage:any = {
      required : 'Este campo es obligatorio',
      minlength : `El mínimo de caracteres es ${errors?.['minlength']?.requiredLength}` ,
      maxlength : `El máximo de caracteres es ${errors?.['maxlength']?.requiredLength}` ,
      min: `El valor debe ser mayor a ${errors?.['min']?.min}`
    }
    
    for(const error in controlForm.errors){
      if(controlForm.errors.hasOwnProperty(error)){
        return errorsMessage[error] || 'Error desconocido';
      }
      return '';
    }
  }

}
