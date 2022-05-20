import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title = 'rit-swapi-test';
  isPopup = false;
  data: any;

  ngOnInit(): void {

  }

  openPopup(data: any){
    this.isPopup = true;
    this.data = data;
  }

  closePopup(){
    this.isPopup = false;
  }
}
