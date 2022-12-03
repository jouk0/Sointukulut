import { Component } from '@angular/core';

@Component({
  selector: 'app-jukan',
  templateUrl: './jukan.component.html',
  styleUrls: ['./jukan.component.scss']
})
export class JukanComponent {

  public flamenkoChord: Array<any> = [{
    name: 'Em',
    chords: [{
      name: 'Em',
      class: 'eeeMinor'
    },{
      name: 'Fm',
      class: 'effMinor'
    },{
      name: 'F#maj7',
      class: 'effSharpMajor7'
    },{
      name: 'G7',
      class: 'geeSeven'
    },{
      name: 'A<sub>b</sub>',
      class: 'aueSeven'
    },{
      name: 'H',
      class: 'eichSeven'
    }]
  }]
}
