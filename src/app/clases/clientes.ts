import{ Direccion } from './direccion';
export class Clientes {
    clienteId: number;
    name: string;
    lastName: string;
    cedula: string;
    birthDate: Date;
    createdAt: string;
    email: string;
    active: boolean;
   
    constructor() {
        this.clienteId = 0
        this.name = ''
        this.lastName = ''
        this.cedula = ''
        this.birthDate = new Date()
        this.createdAt = ''
        this.email = ''
        this.active = true
      
    }
}
