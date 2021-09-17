import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']



})
export class AppComponent {



  @HostListener("document:scroll")
  scrollFunction(){

    // features
      if(document.documentElement.scrollTop >= 300)
      {
        var list = document.querySelectorAll("img.animate-image-feature").length

        for(var i = 0; i<list; i++){
            document.querySelectorAll("img.animate-image-feature")[i].classList.add("is-visible")
        }
      }
//socialfeed
      if (document.documentElement.scrollTop >= 1000)
     {
       var elementSocialfeed = document.getElementById("animate-image-socialfeed");
       elementSocialfeed.classList.add("is-visible-socialfeed")
     }

     //creator
     if (document.documentElement.scrollTop >= 2000)
     {
      var list = document.querySelectorAll("img.show-on-scroll-creator").length

      for(var i = 0; i<list; i++){
          document.querySelectorAll("img.show-on-scroll-creator")[i].classList.add("is-visible-creator")
      }
     }

     else {

      if(document.documentElement.scrollTop <= 300)
      {
        var list = document.querySelectorAll("img.animate-image-feature").length

        for(var i = 0; i<list; i++){
            document.querySelectorAll("img.animate-image-feature")[i].classList.remove("is-visible")
        }
      }

      if (document.documentElement.scrollTop <= 1000)
      {
        var elementSocialfeed = document.getElementById("animate-image-socialfeed");
        elementSocialfeed.classList.remove("is-visible-socialfeed")
      }

      if (document.documentElement.scrollTop <= 2000)
      {
        var list = document.querySelectorAll("img.show-on-scroll-creator").length

        for(var i = 0; i<list; i++){
            document.querySelectorAll("img.show-on-scroll-creator")[i].classList.remove("is-visible-creator")
        }
      }

     }

     //console.log(document.documentElement.scrollTop)
  
  }

  

}
