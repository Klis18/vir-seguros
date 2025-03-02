import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  showAlertSuccesMessage(text:string){
          Swal.fire({
            title: 'Excelente!',
            text: `Se ha ${text} el registro exitosamente`,
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }
  
        showAlertErrorMessage(text:string){
          Swal.fire({
            title: 'Error!',
            text: `Lo sentimos, no se pudo ${text} el registro, vuelve a intentarlo más tarde`,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        }
}
