import { Component } from '@angular/core';

@Component({
  selector: 'app-sanoitus-ohje',
  templateUrl: './sanoitus-ohje.component.html',
  styleUrls: ['./sanoitus-ohje.component.scss']
})
export class SanoitusOhjeComponent {
  public powerChordRiffit: Array<any> = [{
    name: 'D',
    chords: [{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    }, {
      name: 'E7',
      class: 'eeeSeven',
      color: '#ffff00'
    },{
      name: 'Fmaj7',
      class: 'effMajor7',
      color: '#ffff00'
    },{
      name: 'Am',
      class: 'aueMinor',
      color: '#4c00db'
    },{
      name: 'A#',
      class: 'aueSharpMinorSeven',
      color: '#9e00b3'
    },{
      name: 'Hm7',
      class: 'eichMinorSeven',
      color: '#ff0075'
    },{
      name: 'C#maj7',
      class: 'ceeSharpMajor7',
      color: '#ff5b22'
    }]
  }]
}
