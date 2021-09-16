import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    document.querySelectorAll(".nav-link")[0].addEventListener("click",this.hideMenu);
    document.querySelectorAll(".nav-link")[1].addEventListener("click",this.hideMenu);
    document.querySelectorAll(".nav-link")[2].addEventListener("click",this.hideMenu);
  }

 

   hideMenu() {

    document.getElementById("myClickMenu")?.click();
  }

}
