import { Component } from '@angular/core';

@Component({
  selector: 'app-omatriffit',
  templateUrl: './omatriffit.component.html',
  styleUrls: ['./omatriffit.component.scss']
})
export class OmatriffitComponent {

  public omatRiffit: Array<any> = [{
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
  },{
    name: 'D#',
    chords: [{
      name: 'D#',
      class: 'deeCharp'
    }, {
      name: 'E7',
      class: 'eeeSeven'
    },{
      name: 'Gmaj7',
      class: 'geeMajor7'
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
  },{
    name: 'E',
    chords: [{
      name: 'E',
      class: 'eee'
    }, {
      name: 'F#7',
      class: 'effSharpSeven'
    },{
      name: 'Gmaj7',
      class: 'geeMajor7'
    },{
      name: 'A',
      class: 'aueMinor'
    },{
      name: 'Hm',
      class: 'eichMinorSeven'
    },{
      name: 'C#m7',
      class: 'ceeCharpMinorSeven'
    },{
      name: 'Dmaj7',
      class: 'deeMajor7'
    }]
  }]
}
