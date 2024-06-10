import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Clientes } from '../../clases/clientes';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/Clientes/clientes.service';
import { response } from 'express';

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
      lastName:['',Validators.required],
      cedula:['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate:[new Date(),Validators.required],
      createdAt:[new Date(),Validators.required],
      email:['',[Validators.required, Validators.email]],
      active:[true, Validators.required]
    })

    this.detalle.params.subscribe((params) =>{
      if(params['id'] ){
        this.servicio.getClienteID(+params['id']).subscribe({
          next:(value)=>{
            this.formulario.patchValue(value)
          },
          error:(error)=>{
            console.error(error)
          }
        })
      }
       
      
    })
  }

 

  

  BotonGuardar(){
    this.formulario.markAllAsTouched()

    console.info('Valor del formulario: ', this.formulario.value)
    console.info('Validez del formulario: ', this.formulario.valid)
    
    if(this.formulario.valid){
      this.servicio.guardardatos(this.formulario.value).subscribe({
        next:(value)=>{
          console.info('Respuesta del servidor: ', value)
        },
        error:(error)=>{
          console.error('Error del servidor: ', error)
        }
      })
    }
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
        
      } else if (this.formulario.get(controlName).hasError('email')){
        return `El campo ${name} no es un email valido`;
    
      }
    }

    return '';

  }


}
