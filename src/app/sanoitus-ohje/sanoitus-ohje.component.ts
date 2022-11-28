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
      class: 'deeCharp'
    }, {
      name: 'D#',
      class: 'deeSeven'
    },{
      name: 'Emaj7',
      class: 'eeeMajor7'
    },{
      name: 'A',
      class: 'aueMinor'
    },{
      name: 'A#',
      class: 'aueSharpMinorSeven'
    },{
      name: 'Hm7',
      class: 'eichMinorSeven'
    },{
      name: 'C#maj7',
      class: 'ceeSharpMajor7'
    }]
  }]
}
