import { Component } from '@angular/core';
import { BackendService } from '../backend.service'
@Component({
  selector: 'app-sanoitus-ohje',
  templateUrl: './sanoitus-ohje.component.html',
  styleUrls: ['./sanoitus-ohje.component.scss']
})
export class SanoitusOhjeComponent {
  
  public powerChordRiffitKaikki: Array<any> = [{
    name: 'C',
    chords: [{
      name: 'C',
      class: 'cee',
      color: '#ff0000'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    },{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    }]
  },{
    name: 'C#',
    chords: [{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    },{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    }]
  },{
    name: 'D',
    chords: [{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    },{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'C',
      class: 'cee',
      color: '#ff0000'
    }]
  },{
    name: 'D#',
    chords: [{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    },{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    }]
  },{
    name: 'E',
    chords: [{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    }]
  },{
    name: 'F',
    chords: [{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    }]
  },{
    name: 'F#',
    chords: [{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    }]
  },{
    name: 'G',
    chords: [{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'C',
      class: 'cee',
      color: '#ff0000'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff8000'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    }]
  },{
    name: 'G#',
    chords: [{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    },{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    },{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    }]
  },{
    name: 'A',
    chords: [{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    },{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    },{
      name: 'C',
      class: 'cee',
      color: '#ff0000'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    }]
  },{
    name: 'A#',
    chords: [{
      name: 'A#',
      class: 'aueSharp',
      color: '#9e00b3'
    },{
      name: 'C',
      class: 'cee',
      color: '#ff0000'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D#',
      class: 'deeCharp',
      color: '#ff9700'
    },{
      name: 'F',
      class: 'eff',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G#',
      class: 'geeSharp',
      color: '#0000ff'
    }]
  },{
    name: 'H',
    chords: [{
      name: 'H',
      class: 'eich',
      color: '#ff0075'
    },{
      name: 'C#',
      class: 'ceeCharp',
      color: '#ff5b22'
    },{
      name: 'D',
      class: 'dee',
      color: '#ff8000'
    },{
      name: 'E',
      class: 'eee',
      color: '#ffff00'
    },{
      name: 'F#',
      class: 'effSharp',
      color: '#00fe00'
    },{
      name: 'G',
      class: 'gee',
      color: '#00fbfe'
    },{
      name: 'A',
      class: 'aue',
      color: '#4c00db'
    }]
  }]
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
  public perusSointukulkuData: Array<any> = []
  constructor(private backend: BackendService) {
    this.backend.perusSointuKulkuDataOsbserver.subscribe((response:any) => {
      if(response) {
        console.log(response)
        this.perusSointukulkuData = response
      }
    })
  }
}
