import { Component } from '@angular/core';

@Component({
  selector: 'app-erikoisotteet',
  templateUrl: './erikoisotteet.component.html',
  styleUrls: ['./erikoisotteet.component.scss']
})
export class ErikoisotteetComponent {

  public specialChords: Array<any> = [{
    name: 'C',
    chords: [{
      name: 'Cmaj7',
      class: 'ceeMajor7'
    },{
      name: 'Cdim',
      class: 'ceeDim'
    },{
      name: 'C9',
      class: 'ceeNine'
    }]
  },{
    name: 'C#',
    chords: [{
      name: 'C#maj7',
      class: 'ceeSharpMajor7'
    },{
      name: 'C#dim',
      class: 'ceeSharpDim'
    },{
      name: 'C#9',
      class: 'ceeSharpNine'
    }]
  },{
    name: 'D',
    chords: [{
      name: 'Dmaj7',
      class: 'deeMajor7'
    },{
      name: 'Ddim',
      class: 'deeDim'
    },{
      name: 'D9',
      class: 'deeNine'
    }]
  },{
    name: 'D#',
    chords: [{
      name: 'D#maj7',
      class: 'deeSharpMajor7'
    },{
      name: 'D#dim',
      class: 'deeSharpDim'
    },{
      name: 'D#9',
      class: 'deeSharpNine'
    }]
  },{
    name: 'E',
    chords: [{
      name: 'Emaj7',
      class: 'eeeMajor7'
    },{
      name: 'Edim',
      class: 'eeeDim'
    },{
      name: 'E9',
      class: 'eeeNine'
    }]
  },{
    name: 'F',
    chords: [{
      name: 'Fmaj7',
      class: 'effMajor7'
    },{
      name: 'Fdim',
      class: 'effDim'
    },{
      name: 'F9',
      class: 'effNine'
    }]
  },{
    name: 'F#',
    chords: [{
      name: 'F#maj7',
      class: 'effSharpMajor7'
    },{
      name: 'F#dim',
      class: 'effSharpDim'
    },{
      name: 'F#9',
      class: 'effSharpNine'
    }]
  },{
    name: 'G',
    chords: [{
      name: 'Gmaj7',
      class: 'geeMajor7'
    },{
      name: 'Gdim',
      class: 'geeDim'
    },{
      name: 'G9',
      class: 'geeNine'
    }]
  },{
    name: 'G#',
    chords: [{
      name: 'G#maj7',
      class: 'geeSharpMajor7'
    },{
      name: 'G#dim',
      class: 'geeSharpDim'
    },{
      name: 'G#9',
      class: 'geeSharpNine'
    }]
  },{
    name: 'A',
    chords: [{
      name: 'Amaj7',
      class: 'aueMajor7'
    },{
      name: 'Adim',
      class: 'aueDim'
    },{
      name: 'A9',
      class: 'aueNine'
    }]
  },{
    name: 'A#',
    chords: [{
      name: 'A#maj7',
      class: 'aueSharpMajor7'
    },{
      name: 'A#dim',
      class: 'aueSharpDim'
    },{
      name: 'A#9',
      class: 'aueSharpNine'
    }]
  },{
    name: 'H',
    chords: [{
      name: 'Hmaj7',
      class: 'eichMajor7'
    },{
      name: 'Hdim',
      class: 'eichDim'
    },{
      name: 'H9',
      class: 'eichNine'
    }]
  }]
}
