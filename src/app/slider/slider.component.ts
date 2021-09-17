import { Component, OnInit ,ViewEncapsulation, HostListener} from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

@HostListener('mouseenter')doSomething(){
  var element = document.querySelector("h1");

  element.classList.add('animate__animated', 'animate__pulse')
  setTimeout(function(){ element.classList.remove('animate__animated', 'animate__pulse') }, 1000);
}

}
