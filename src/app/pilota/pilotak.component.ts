import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../services/pilota.service';


@Component({
  selector: 'app-pilotak',
  templateUrl: './pilotak.component.html',
  styleUrls: ['./pilotak.component.css']
})
export class PilotakComponent implements OnInit {

  public pilotak : PilotaModel[] = [];
  public query :string = "";

  constructor(private route:ActivatedRoute, private _router: Router, private pilotaszerviz:PilotaService) { 

    this.route.queryParams.subscribe(params => {
      this.query = params["query"];

      this.pilotaszerviz.getPilotak(this.query).subscribe(adatok => {
        this.pilotak = adatok;

        //this.pilotak[7].csapat.nemzet = "valami";
      });
    });
  }

  ngOnInit(): void {
  }

  kereses() {
    this.pilotaszerviz.getPilotak(this.query).subscribe(adatok => {
      this.pilotak = adatok;


      this._router.navigate([], {
        queryParams: {
          query: this.query
        },
        queryParamsHandling: 'merge',
      });

    });
  }

  PilotaTorlese(model:PilotaModel) {
    this.pilotaszerviz.deletePilota(model).subscribe();
  }

}
