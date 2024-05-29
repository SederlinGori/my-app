import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-estado-boton',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './estado-boton.component.html',
  styleUrl: './estado-boton.component.css'
})
export class EstadoBotonComponent {

  @Input() active;

  @Output() activar = new EventEmitter<void>();
  @Output() desactivar = new EventEmitter<void>();

  public onActivate() : void {
    this.activar.emit();
  }

  public onDeactivate() : void {
    this.desactivar.emit();
  }

}
