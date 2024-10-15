import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CosmosService } from '../shared/service/cosmos.service';
import { Cosmos } from '../shared/models/Cosmos';
import {COSMOS} from '../shared/models/cosmos-mock-data';

@Component({
  selector: 'app-comos',
  templateUrl: './comos.component.html',
  styleUrls: ['./comos.component.css']
})
export class ComosComponent implements OnInit {
  constructor(private  route: ActivatedRoute, private router: Router, private cosmosService: CosmosService) { }

  planets: Cosmos[];

  ngOnInit() {
    //this.planets = COSMOS;
    //this.planets = this.cosmosService.getPlanets();
    this.cosmosService.getPlanets().subscribe(planets => {
      this.planets = planets;
    });
  }

  onSelect(planet: Cosmos) {
    this.router.navigate(['/cosmos', planet.id], {state: { planet }});
  } 

}
