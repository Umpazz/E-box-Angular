import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COSMOS } from '../shared/models/cosmos-mock-data';
import {Cosmos} from '../shared/models/Cosmos';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  // Fill your code here
  
  
  @Input() planet: Cosmos;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.route.params.subscribe(params => {
      //const planetId = params['id'];
      // You can use the planetId to fetch the planet details from the service or API
      // For now, I'll assume you have the planet details in the state
      this.planet = history.state.planet; 
    //});
  }
}
