import { Component, OnInit } from '@angular/core';
import { CsapatModel } from '../models/csapat.model';
import { PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../services/pilota.service';

@Component({
  selector: 'app-ujpilota',
  templateUrl: './ujpilota.component.html',
  styleUrls: ['./ujpilota.component.css']
})
export class UjpilotaComponent implements OnInit {

  public pilota:PilotaModel = {
    ID: 0,
    nev: "Valaki János",
    szuletes: Date.now(),
    magassag: 180,
    nemzet : "",
    csapat : {
      ID : 1,
      nev : "",
      nemzet: ""
    }
  };

  constructor(private pilotaservice:PilotaService) { }

  ngOnInit(): void {
  }

  ujpilota() {
    this.pilotaservice.insertPilota(this.pilota);
  }

}
