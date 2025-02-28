import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      insuredId : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      insuredName:['', [Validators.required]],
      phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      age:['', [Validators.required, Validators.min(18)]]
    });

    this.data.type == 'edit' ? this.typeForm = 'Editar' : this.typeForm = 'Agregar';

    const insuredData = this.insuredService.getInsured(this.data.insuredId);

    this.data.type == 'edit' ? this.insuredForm.setValue(insuredData) : '';

  }

  onSubmit(){
    if(this.insuredForm.valid){
      this.data.type == 'edit' ? this.editInsured() : this.addInsured();
    }
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

  verifyError(campoName: string):boolean{
    const controlForm = this.insuredForm.get(campoName);
    if(controlForm?.invalid && controlForm.touched){
      return true;
    }
    return false;
  }


  showFormsErrorMessages(campoName: string){
    const controlForm = this.insuredForm.get(campoName);

    if(!controlForm) return '';

    const errors = controlForm.errors;

    const errorMessages:any = {
      required:'Este campo es obligatorio',
      minlength: `El valor mínimo de caracteres es ${errors?.['minlength']?.requiredLength}`,
      maxlength: `El valor máximo de caracteres es ${errors?.['maxlength']?.requiredLength}`,
      min: `La edad mínima permitida es ${errors?.['min']?.min}`
    }

    for(const error in controlForm.errors){
      if(controlForm.errors.hasOwnProperty(error)){

        return errorMessages[error] || 'Error desconocido';
      }

      return '';
    }
  }
}
