import { Component } from '@angular/core';

@Component({
  selector: 'app-flamenko',
  templateUrl: './flamenko.component.html',
  styleUrls: ['./flamenko.component.scss']
})
export class FlamenkoComponent {

  public flamenkoChord: Array<any> = [{
    name: 'Am',
    chords: [{
      name: 'Am',
      class: 'aueMinor'
    },{
      name: 'Gm',
      class: 'geeMinor'
    },{
      name: 'Fmaj',
      class: 'effMajor'
    },{
      name: 'E7',
      class: 'effSeven'
    }]
  },{
    name: 'Em',
    chords: [{
      name: 'Em',
      class: 'eeeMinor'
    },{
      name: 'Dm',
      class: 'deeMinor'
    },{
      name: 'Cm',
      class: 'ceeMinor'
    },{
      name: 'Hm',
      class: 'eichMinor'
    }]
  },{
    name: 'Hm',
    chords: [{
      name: 'Hm',
      class: 'eichMinor'
    },{
      name: 'Am',
      class: 'aueMinor'
    },{
      name: 'Gm',
      class: 'geeMinor'
    },{
      name: 'F#m',
      class: 'effSharpMinor'
    }]
  },{
    name: 'C#m',
    chords: [{
      name: 'C#m',
      class: 'ceeCharpMinor'
    },{
      name: 'Hm',
      class: 'eichMinor'
    },{
      name: 'Am',
      class: 'aueMinor'
    },{
      name: 'G#m',
      class: 'geeSharpMinor'
    }]
  },{
    name: 'F#m',
    chords: [{
      name: 'F#m',
      class: 'effSharpMinor'
    },{
      name: 'Em',
      class: 'eeeMinor'
    },{
      name: 'Dm',
      class: 'deeMinor'
    },{
      name: 'C#m',
      class: 'ceeCharpMinor'
    }]
  }]
}
