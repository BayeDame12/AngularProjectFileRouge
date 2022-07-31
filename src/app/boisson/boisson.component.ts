import { Component, OnInit } from '@angular/core';
import { Boissons } from '../model/boissons';
import { BoissonsService } from '../services/boissons.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
