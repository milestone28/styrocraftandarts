import { Component, OnInit, HostListener, } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  show : boolean;
  countDown : number;
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

  
  @HostListener("document:scroll")
  scrollFunction(){

  

    var animationNavBar = document.getElementById("navigation-bar");

    if(document.documentElement.scrollTop >0 || document.body.scrollTop > 0){
    
     animationNavBar.classList.add('animate__animated', 'animate__bounceOutLeft')
    }
    else{
      animationNavBar.classList.remove('animate__animated', 'animate__bounceOutLeft')
    }

  }


  showLoginForm()
  {
    this.countDown =+ 5000;
    var move = document.querySelectorAll("a.nav-move").length;

    for(var i = 0; i < move; i++){
       document.querySelectorAll("a.nav-move")[i].classList.remove('animate__animated', 'animate__fadeInLeft')
          document.querySelectorAll("a.nav-move")[i].classList.add('animate__animated', 'animate__fadeOutLeft')
         
    }

    this.show = !this.show;

    setTimeout(() => {
      for(var i = 0; i < move; i++){
        document.querySelectorAll("a.nav-move")[i].classList.remove('animate__animated', 'animate__fadeOutLeft')
        document.querySelectorAll("a.nav-move")[i].classList.add('animate__animated', 'animate__fadeInLeft')
    }
      this.show = !this.show;
      this.countDown == 0;
    }, this.countDown);

  }

}
