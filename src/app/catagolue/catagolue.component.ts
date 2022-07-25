import { Component, OnInit } from '@angular/core';
import { Iburger } from '../burger/Iburger';
import { Imenu } from '../menu/Imenu';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-catagolue',
  templateUrl: './catagolue.component.html',
  styleUrls: ['./catagolue.component.css']
})
export class CatagolueComponent implements OnInit {
data: any;
  constructor(private catalogue:ServicesService ) {


  }

  ngOnInit(): void {


}
}
