import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  @Input() person: any;

  getGender(){
    return this.person.gender === 'n/a' ? 'na' : this.person.gender;      
  }
}
