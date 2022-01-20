import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PilotaModel } from '../models/pilota.model';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  constructor(private http: HttpClient) { }

  getPilotak(query:string = ""):Observable<PilotaModel[]> {

    return this.http
        .get<any[]>("http://127.0.0.1:8000/pilotak", {params: {q:query}})
        .pipe(map(adatok_szerverről => {
                let válasz :PilotaModel[] = [];
                    
                adatok_szerverről.forEach(adat => {
                  válasz.push(new PilotaModel(adat))
                });
                return válasz;
              }));
  }

  deletePilota(model:PilotaModel):Observable<unknown> {
    
    return this.http.delete('http://127.0.0.1:8000/delete/'+model.ID)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        throw(new Error(error.message));
      })
    );

    
  }

}
