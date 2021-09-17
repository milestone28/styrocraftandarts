import { Component, OnInit, HostListener } from '@angular/core';
import { features } from '../mocks';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features : any = features;
  constructor() { }

  ngOnInit(): void {
    
  }


}
