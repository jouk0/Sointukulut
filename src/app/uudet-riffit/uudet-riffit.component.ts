import { Component } from '@angular/core';
import { BackendService } from '../backend.service'

@Component({
  selector: 'app-uudet-riffit',
  templateUrl: './uudet-riffit.component.html',
  styleUrls: ['./uudet-riffit.component.scss']
})
export class UudetRiffitComponent {
  public chords: Array<any> = [{
    name: 'C',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'C#',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'D',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'D#',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'E',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'F',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'F#',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'G',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'G#',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'A',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'A#',
    duurit: [],
    mollit: [],
    color: ''
  },{
    name: 'H',
    duurit: [],
    mollit: [],
    color: ''
  }]
  public mollit: Array<any> = [{
    name: 'Cm'
  },{
    name: 'Dm'
  },{
    name: 'Em'
  },{
    name: 'Fm'
  },{
    name: 'Gm'
  },{
    name: 'Am'
  },{
    name: 'Hm'
  }]
  public sharpit: Array<any> = [{
    name: 'C#'
  },{
    name: 'D#'
  },{
    name: 'F#'
  },{
    name: 'G#'
  },{
    name: 'A#'
  }]
  public allChords: Array<any> = [{
    name: 'C',
    class: 'cee',
    color: '#ff0000'
  },{
    name: 'Cm',
    class: 'ceeMinor',
    color: '#ff0000'
  },{
    name: 'C#',
    class: 'ceeCharp',
    color: '#ff5b22'
  },{
    name: 'C#m',
    class: 'ceeCharpMinor',
    color: '#ff5b22'
  },{
    name: 'D',
    class: 'dee',
    color: '#ff8000'
  },{
    name: 'Dm',
    class: 'deeMinor',
    color: '#ff8000'
  },{
    name: 'D#',
    class: 'deeCharp',
    color: '#ff9700'
  },{
    name: 'E',
    class: 'eee',
    color: '#ffff00'
  },{
    name: 'Em',
    class: 'eeeMinor',
    color: '#ffff00'
  },{
    name: 'F',
    class: 'eff',
    color: '#7dff00'
  },{
    name: 'Fm',
    class: 'effMinor',
    color: '#7dff00'
  },{
    name: 'F#',
    class: 'effSharp',
    color: '#00fe00'
  },{
    name: 'F#m',
    class: 'effSharpMinor',
    color: '#00fe00'
  },{
    name: 'G',
    class: 'gee',
    color: '#00fbfe'
  },{
    name: 'Gm',
    class: 'geeMinor',
    color: '#00fbfe'
  },{
    name: 'G#',
    class: 'geeSharp',
    color: '#0000ff'
  },{
    name: 'G#m',
    class: 'geeSharpMinor',
    color: '#0000ff'
  },{
    name: 'A',
    class: 'aue',
    color: '#4c00db'
  },{
    name: 'Am',
    class: 'aueMinor',
    color: '#4c00db'
  },{
    name: 'A#',
    class: 'aueSharp',
    color: '#9e00b3'
  },{
    name: 'A#m',
    class: 'aueSharpMinor',
    color: '#9e00b3'
  },{
    name: 'H',
    class: 'eich',
    color: '#ff0075'
  },{
    name: 'Hm',
    class: 'eichMinor',
    color: '#ff0075'
  },{
    name: 'C',
    class: 'cee',
    color: '#ff0000'
  },{
    name: 'Cm',
    class: 'ceeMinor',
    color: '#ff0000'
  },{
    name: 'C#',
    class: 'ceeCharp',
    color: '#ff5b22'
  },{
    name: 'C#m',
    class: 'ceeCharpMinor',
    color: '#ff5b22'
  },{
    name: 'D',
    class: 'dee',
    color: '#ff8000'
  },{
    name: 'Dm',
    class: 'deeMinor',
    color: '#ff8000'
  },{
    name: 'D#',
    class: 'deeCharp',
    color: '#ff9700'
  },{
    name: 'D#m',
    class: 'deeCharpMinor',
    color: '#ff9700'
  },{
    name: 'E',
    class: 'eee',
    color: '#ffff00'
  },{
    name: 'Em',
    class: 'eeeMinor',
    color: '#ffff00'
  },{
    name: 'F',
    class: 'eff',
    color: '#7dff00'
  },{
    name: 'Fm',
    class: 'effMinor',
    color: '#7dff00'
  },{
    name: 'F#',
    class: 'effSharp',
    color: '#00fe00'
  },{
    name: 'F#m',
    class: 'effSharpMinor',
    color: '#00fe00'
  },{
    name: 'G',
    class: 'gee',
    color: '#00fbfe'
  },{
    name: 'Gm',
    class: 'geeMinor',
    color: '#00fbfe'
  },{
    name: 'G#',
    class: 'geeSharp',
    color: '#0000ff'
  },{
    name: 'G#m',
    class: 'geeSharpMinor',
    color: '#0000ff'
  },{
    name: 'A',
    class: 'aue',
    color: '#4c00db'
  },{
    name: 'Am',
    class: 'aueMinor',
    color: '#4c00db'
  },{
    name: 'A#',
    class: 'aueSharp',
    color: '#9e00b3'
  },{
    name: 'A#m',
    class: 'aueSharpMinor',
    color: '#9e00b3'
  },{
    name: 'H',
    class: 'eich',
    color: '#ff0075'
  },{
    name: 'Hm',
    class: 'eichMinor',
    color: '#ff0075'
  },{
    name: 'C',
    class: 'cee',
    color: '#ff0000'
  },{
    name: 'Cm',
    class: 'ceeMinor',
    color: '#ff0000'
  },{
    name: 'C#',
    class: 'ceeCharp',
    color: '#ff5b22'
  },{
    name: 'C#m',
    class: 'ceeCharpMinor',
    color: '#ff5b22'
  },{
    name: 'D',
    class: 'dee',
    color: '#ff8000'
  },{
    name: 'Dm',
    class: 'deeMinor',
    color: '#ff8000'
  },{
    name: 'D#',
    class: 'deeCharp',
    color: '#ff9700'
  },{
    name: 'D#m',
    class: 'deeCharpMinor',
    color: '#ff9700'
  },{
    name: 'E',
    class: 'eee',
    color: '#ffff00'
  },{
    name: 'Em',
    class: 'eeeMinor',
    color: '#ffff00'
  },{
    name: 'F',
    class: 'eff',
    color: '#7dff00'
  },{
    name: 'Fm',
    class: 'effMinor',
    color: '#7dff00'
  },{
    name: 'F#',
    class: 'effSharp',
    color: '#00fe00'
  },{
    name: 'F#m',
    class: 'effSharpMinor',
    color: '#00fe00'
  },{
    name: 'G',
    class: 'gee',
    color: '#00fbfe'
  },{
    name: 'Gm',
    class: 'geeMinor',
    color: '#00fbfe'
  },{
    name: 'G#',
    class: 'geeSharp',
    color: '#0000ff'
  },{
    name: 'G#m',
    class: 'geeSharpMinor',
    color: '#0000ff'
  },{
    name: 'A',
    class: 'aue',
    color: '#4c00db'
  },{
    name: 'Am',
    class: 'aueMinor',
    color: '#4c00db'
  },{
    name: 'A#',
    class: 'aueSharp',
    color: '#9e00b3'
  },{
    name: 'A#m',
    class: 'aueSharpMinor',
    color: '#9e00b3'
  },{
    name: 'H',
    class: 'eich',
    color: '#ff0075'
  },{
    name: 'Hm',
    class: 'eichMinor',
    color: '#ff0075'
  }]
  public uudetRiffitAvain: Array<any> = [{
    name: 'E',
    chords: [{
      name: 'E',
      class: 'eee'
    },{
      name: 'G',
      class: 'gee'
    },{
      name: 'A',
      class: 'aue'
    },{
      name: 'C',
      class: 'cee'
    },{
      name: 'D',
      class: 'dee'
    }]
  }]
  public data: any;
  constructor(
    private backend: BackendService
  ) {
    this.chords.forEach((elem:any, ind:number) => {
      this.allChords.forEach((elem2:any, ind2:number) => {
        if(ind2 > 24 && ind2 < 48) {
          if(elem.name === elem2.name) {
            elem.duurit.push(this.allChords[ind2])
            elem.duurit.push(this.allChords[ind2+6])
            elem.duurit.push(this.allChords[ind2+10])
            elem.duurit.push(this.allChords[ind2+16])
            elem.duurit.push(this.allChords[ind2+20])
          }
        }
      })
    })

    this.backend.setUudetRiffitSointuKulkuData(this.chords)

    this.backend.perusSointuKulkuDataOsbserver.subscribe((response:any) => {
      if(response) {
        setTimeout(() => {
          this.data = response
        }, 2000)
      }
    })
  }
}
