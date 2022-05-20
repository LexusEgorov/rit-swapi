import { Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() isOpen: any;
  @Input() data: any;
  @Output() closePopup = new EventEmitter();

  filterValue = '';

  getImage(){
    const num = Math.max(Math.min(Math.floor((this.data.name.length / 3) + 1), 6), 1);
    return `url('../../assets/images/popup/popup-bg${num}.jpeg')`
  }

  closeHandler(){
    this.filterValue = '';
    this.closePopup.emit();
  }
}
