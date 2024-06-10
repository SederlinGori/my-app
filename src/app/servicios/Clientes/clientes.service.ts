import { Injectable } from '@angular/core';
import { Clientes } from '../../clases/clientes';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private Url : string =" https://report-api.somee.com/api/Clientes";

 

 

  constructor( private http : HttpClient) { }

  guardardatos(data : any): Observable<any>{
    return this.http.post<any>(this.Url, data).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of();
      })
    )
  }

  getClientes(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.Url).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of([]);
      })

    );
  }

  getClienteID(clienteId : Number) : Observable<Clientes> | undefined{
   return this.http.get<Clientes>(this.Url + '/' + clienteId).pipe(
      map(response => {
        console.table( response)
         return response}),
      catchError(error => {
        console.error(error);
        return of();
      })
   )
  }

  editCliente(clienteData: Partial<Clientes>): Observable<Clientes | undefined> {
   return this.http.post<Clientes>(this.Url, clienteData).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of();
      })   
    )
  }
  crearcliente(){}
}
