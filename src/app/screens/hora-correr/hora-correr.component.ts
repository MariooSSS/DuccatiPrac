import { Component } from '@angular/core';

@Component({
  selector: 'app-hora-correr',
  templateUrl: './hora-correr.component.html',
  styleUrls: ['./hora-correr.component.scss']
})
export class HoraCorrerComponent {
  
  constructor(){}

  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}

