import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sointukulut';
  public date: Date = new Date()
  constructor() {
    document.querySelectorAll('title')[0].innerHTML = 'Sointukulut Versio ' + this.date.getDate() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear() + ' Kello ' + this.date.getHours() + '.' + this.date.getMinutes() 
  }
}
