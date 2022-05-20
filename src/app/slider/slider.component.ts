import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { planets, peoples } from 'src/swapi';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit{
  @Output()
  onPopup = new EventEmitter();
  
  planets!: any[];
  countSlides = 1;

  ngOnInit(): void {
    planets.then(this.loadPlanets);
    peoples.then(this.loadPeoples);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      this.countSlides = Math.max(Math.floor((event.target.innerWidth * 0.8) / 400), 1);
  }

  loadPeoples = (peoples: any) =>{
    for(let planet of this.planets){
      planet.residents = planet.residents.map((resident: any) => {
        return peoples[resident -1];
      });
    }
  }

  loadPlanets = (planets: any) =>{
    this.planets = planets;
    this.remakeResidents();
    this.countSlides = Math.floor((window.innerWidth * 0.8) / 400);
  }

  remakeResidents(){
    for(let planet of this.planets){
      planet.residents = planet.residents.map((resident: string) => {
        resident = String(resident).substr(-3, 2);
        if(resident[0] === '/'){
          resident = String(resident).substr(1, 1);
        }
        return resident;
      })
    };
  }

  openPopup(data: any) {
    this.onPopup.emit(data);
  }

}
