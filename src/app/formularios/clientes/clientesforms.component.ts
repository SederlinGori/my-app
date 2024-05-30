import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Clientes } from '../../clases/clientes';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/Clientes/clientes.service';

@Component({
  selector: 'app-clientesforms',
  standalone: false, 
  templateUrl: './clientesforms.component.html',
  styleUrl: './clientesforms.component.css'
})
export class ClientesformsComponent {
 
  formulario: FormGroup;

 cliente : Observable<Clientes>

  constructor( private forms : FormBuilder, private detalle :ActivatedRoute, private servicio : ClientesService){
    this.formulario = this.forms.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      cedula:['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate:[new Date(),Validators.required],
      createAt:[new Date(),Validators.required],
      email:['',[Validators.required, Validators.email]],
      active:[true, Validators.required]
    })
  }

  BotonGuardar(){
    this.formulario.markAllAsTouched()

    console.info('Valor del formulario: ', this.formulario.value)
    console.info('Validez del formulario: ', this.formulario.valid)
  }

  public getError(controlName : string, name : string){
    if(this.formulario.get(controlName) != null 
    && this.formulario.get(controlName).touched
    && this.formulario.get(controlName).invalid){

      if(this.formulario.get(controlName).hasError('required')){
        return `El campo ${name} es obligatorio.`;
      } else if(this.formulario.get(controlName).hasError('minlength')){
        return `El campo ${name} debe tener al menor 11 digitos`;
      }else if (this.formulario.get(controlName).hasError('maxlength')){
        return `El campo ${name} no puede pasar de 11 digitos`;
      }
    }

    return '';

  }


}
