import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../pilota.service';

@Component({
  selector: 'app-pilota',
  templateUrl: './pilota.component.html',
  styleUrls: ['./pilota.component.css']
})
export class PilotaComponent implements OnInit {

  public pilotak : PilotaModel[] = [];
  public query :string = "";

  constructor(private route:ActivatedRoute, private pilotaszerviz:PilotaService) { 

    this.route.queryParams.subscribe(params => {
      this.query = params["query"];

      this.pilotaszerviz.getPilotak(this.query).subscribe(adatok => {
        this.pilotak = adatok;
      });

    });

    
  }

  ngOnInit(): void {
  }

}
