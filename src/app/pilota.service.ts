import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilotaModel } from './models/pilota.model';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  constructor(private http: HttpClient) { }

  getPilotak(query:string = ""):Observable<PilotaModel[]> {

    return this.http.get<PilotaModel[]>("http://127.0.0.1:8000/pilotak", {params: {
      q:query}
    });
  }

}
