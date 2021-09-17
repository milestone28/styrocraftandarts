import { Component, HostListener, OnInit } from '@angular/core';
import { creators } from '../../app/mocks/index';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  creatorList = creators
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }



}
