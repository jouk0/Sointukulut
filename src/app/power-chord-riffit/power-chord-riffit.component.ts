import { Component } from '@angular/core';

@Component({
  selector: 'app-power-chord-riffit',
  templateUrl: './power-chord-riffit.component.html',
  styleUrls: ['./power-chord-riffit.component.scss']
})
export class PowerChordRiffitComponent {

  public powerChordRiffit: Array<any> = [{
    name: 'C',
    chords: [{
      name: 'C',
      class: 'cee'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'D#',
      class: 'deeCharp'
    },{
      name: 'F',
      class: 'eff'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'A#',
      class: 'aueSharp'
    }]
  },{
    name: 'C#',
    chords: [{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D#',
      class: 'deeCharp'
    },{
      name: 'E',
      class: 'eee'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G#',
      class: 'geeSharp'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'H',
      class: 'eich'
    }]
  },{
    name: 'D',
    chords: [{
      name: 'D',
      class: 'dee'
    },{
      name: 'E',
      class: 'eee'
    },{
      name: 'F',
      class: 'eff'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'C',
      class: 'cee'
    }]
  },{
    name: 'D#',
    chords: [{
      name: 'D#',
      class: 'deeCharp'
    },{
      name: 'F',
      class: 'eff'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G#',
      class: 'geeSharp'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'G#',
      class: 'geeSharp'
    }]
  },{
    name: 'E',
    chords: [{
      name: 'E',
      class: 'eee'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'H',
      class: 'eich'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D',
      class: 'dee'
    }]
  },{
    name: 'F',
    chords: [{
      name: 'F',
      class: 'eff'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'G#',
      class: 'geeSharp'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'D#',
      class: 'deeCharp'
    }]
  },{
    name: 'F#',
    chords: [{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G#',
      class: 'geeSharp'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'H',
      class: 'eich'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'E',
      class: 'eee'
    }]
  },{
    name: 'G',
    chords: [{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'C',
      class: 'cee'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'E',
      class: 'eee'
    },{
      name: 'F#',
      class: 'effSharp'
    }]
  },{
    name: 'G#',
    chords: [{
      name: 'G#',
      class: 'geeSharp'
    },{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'H',
      class: 'eich'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D#',
      class: 'deeCharp'
    },{
      name: 'F',
      class: 'eff'
    },{
      name: 'F#',
      class: 'effSharp'
    }]
  },{
    name: 'A',
    chords: [{
      name: 'A',
      class: 'aue'
    },{
      name: 'H',
      class: 'eich'
    },{
      name: 'C',
      class: 'cee'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'E',
      class: 'eee'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G',
      class: 'gee'
    }]
  },{
    name: 'A#',
    chords: [{
      name: 'A#',
      class: 'aueSharp'
    },{
      name: 'C',
      class: 'cee'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D#',
      class: 'deeCharp'
    },{
      name: 'F',
      class: 'eff'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G#',
      class: 'geeSharp'
    }]
  },{
    name: 'H',
    chords: [{
      name: 'H',
      class: 'eich'
    },{
      name: 'C#',
      class: 'ceeCharp'
    },{
      name: 'D',
      class: 'dee'
    },{
      name: 'E',
      class: 'eee'
    },{
      name: 'F#',
      class: 'effSharp'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    }]
  }]
}
