import{ Direccion } from './direccion';
export class Clientes {
    clienteId: number;
    name: string;
    lastName: string;
    cedula: string;
    birthDate: Date;
    createAt: string;
    email: string;
    active: boolean;
    addresses: Direccion[];
    constructor() {
        this.clienteId = 0
        this.name = ''
        this.lastName = ''
        this.cedula = ''
        this.birthDate = new Date()
        this.createAt = ''
        this.email = ''
        this.active = true

        this.addresses = []
    }
}
