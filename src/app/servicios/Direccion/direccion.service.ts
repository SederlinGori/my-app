import { Injectable } from '@angular/core';
import { Direccion } from '../../clases/direccion';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
 
  
  private url: string= "https://report-api.somee.com/api/addresses";

  constructor( private httpDireccion :HttpClient) { }


  guardardatos(data : any): Observable<any>{
    return this.httpDireccion.post<any>(this.url, data).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of();
      })
    )
  }

 

 

  getDireccion(): Observable<Direccion[]>{
   return this.httpDireccion.get<Direccion[]>(this.url).pipe(
    map(response => response),
    catchError(error => {
      console.error(error);
      return of([]);
    }
   ))
  }

  getdireccionId(addressId : number): Observable<Direccion> | undefined{
   return this.httpDireccion.get<Direccion>(this.url + '/' + addressId).pipe(
      map(response => {
        console.table(response)
        return response
      }),
      catchError(error => {
        console.error(error);
        return of();
      })
   )

  }
  getDireccionesByClientId(clienteId : number): Observable<Direccion> | undefined{
    return this.httpDireccion.get<Direccion>(this.url + '/' + clienteId).pipe(
      map(response => {
        console.table(response)
        return response
      }),
      catchError(error => {
        console.error(error);
        return of();
      })
   )
  }
  

 

  editDireccion(direccionData: Partial<Direccion>): Observable<Direccion | undefined> {
    return this.httpDireccion.post<Direccion>(this.url, direccionData).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of();
      })
    )
   
  }  
  

}
