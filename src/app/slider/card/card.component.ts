import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: any; 
  @Output() onPopup = new EventEmitter();
  
  openPopup(data: any){
    this.onPopup.emit(data);
  }

  getImage(){
    return Math.max(Math.min(Math.floor((this.data.name.length / 3) + 1), 6), 1);
    //получаю число в диапазоне [1; 6]
    // да простят меня фанаты ЗВ, которые знают планеты наизусть :)
  }

}
