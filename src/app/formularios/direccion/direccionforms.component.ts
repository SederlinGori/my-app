import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count } from 'console';
import { DireccionService } from '../../servicios/Direccion/direccion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccionforms',
  standalone: false, 
  templateUrl: './direccionforms.component.html',
  styleUrl: './direccionforms.component.css'
})
export class DireccionformsComponent {

  formulario : FormGroup;

  constructor(private forms : FormBuilder, private detalle :ActivatedRoute, private servicio : DireccionService){
    this.formulario=this.forms.group({

      alias:['',Validators.required],
      street :['',Validators.required],
      city :['',Validators.required],
      state : ['',Validators.required],
      zipCode:['',Validators.required],
      country:['',Validators.required],
      active:[true,Validators.required],
      createdAt:[new Date(),Validators.required],    

    })

    this.detalle.params.subscribe((params)=>{
      if(params['id']){
        this.servicio.getdireccionId(+params['id']).subscribe({
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


    console.info('Valor del formulario',this.formulario.value)
    console.info('Validez del formulario', this.formulario.valid)

    if(this.formulario.valid){
      this.servicio.guardardatos(this.formulario.value).subscribe(
        {
          next: (value)=>{
            console.info('Direccion guardada', value)
          },
          error: (error)=>{
            console.error('Error al guardar', error)
          }
        } 
      )

    }}
    

  
  

   public getError(controlName : string, name : string){
    if(this.formulario.get(controlName) != null 
    && this.formulario.get(controlName).touched
    && this.formulario.get(controlName).invalid){

      if(this.formulario.get(controlName).hasError('required')){
        return `El campo ${name} es obligatorio.`;

      } else if(this.formulario.get(controlName).hasError('minlength')){
        return `El campo ${name} debe tener al menor 11 digitos`;

      }else if (this.formulario.get(controlName).hasError('maxLength')){
        return `El campo ${name} no puede pasar de 11 digitos`;
     
    }
  }

    return '';

  }

  



}
