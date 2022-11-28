import { Component } from '@angular/core';

@Component({
  selector: 'app-perus-sointukulut',
  templateUrl: './perus-sointukulut.component.html',
  styleUrls: ['./perus-sointukulut.component.scss']
})
export class PerusSointukulutComponent {

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
    class: 'cee'
  },{
    name: 'Cm',
    class: 'ceeMinor'
  },{
    name: 'C#',
    class: 'ceeCharp'
  },{
    name: 'D',
    class: 'dee'
  },{
    name: 'Dm',
    class: 'deeMinor'
  },{
    name: 'D#',
    class: 'deeCharp'
  },{
    name: 'E',
    class: 'eee'
  },{
    name: 'Em',
    class: 'eeeMinor'
  },{
    name: 'F',
    class: 'eff'
  },{
    name: 'Fm',
    class: 'effMinor'
  },{
    name: 'F#',
    class: 'effSharp'
  },{
    name: 'G',
    class: 'gee'
  },{
    name: 'Gm',
    class: 'geeMinor'
  },{
    name: 'G#',
    class: 'geeSharp'
  },{
    name: 'A',
    class: 'aue'
  },{
    name: 'Am',
    class: 'aueMinor'
  },{
    name: 'A#',
    class: 'aueSharp'
  },{
    name: 'H',
    class: 'eich'
  },{
    name: 'Hm',
    class: 'eichMinor'
  },{
    name: 'C',
    class: 'cee'
  },{
    name: 'Cm',
    class: 'ceeMinor'
  },{
    name: 'C#',
    class: 'ceeCharp'
  },{
    name: 'D',
    class: 'dee'
  },{
    name: 'Dm',
    class: 'deeMinor'
  },{
    name: 'D#',
    class: 'deeCharp'
  },{
    name: 'E',
    class: 'eee'
  },{
    name: 'Em',
    class: 'eeeMinor'
  },{
    name: 'F',
    class: 'eff'
  },{
    name: 'Fm',
    class: 'effMinor'
  },{
    name: 'F#',
    class: 'effSharp'
  },{
    name: 'G',
    class: 'gee'
  },{
    name: 'Gm',
    class: 'geeMinor'
  },{
    name: 'G#',
    class: 'geeSharp'
  },{
    name: 'A',
    class: 'aue'
  },{
    name: 'Am',
    class: 'aueMinor'
  },{
    name: 'A#',
    class: 'aueSharp'
  },{
    name: 'H',
    class: 'eich'
  },{
    name: 'Hm',
    class: 'eichMinor'
  },{
    name: 'C',
    class: 'cee'
  },{
    name: 'Cm',
    class: 'ceeMinor'
  },{
    name: 'C#',
    class: 'ceeCharp'
  },{
    name: 'D',
    class: 'dee'
  },{
    name: 'Dm',
    class: 'deeMinor'
  },{
    name: 'D#',
    class: 'deeCharp'
  },{
    name: 'E',
    class: 'eee'
  },{
    name: 'Em',
    class: 'eeeMinor'
  },{
    name: 'F',
    class: 'eff'
  },{
    name: 'Fm',
    class: 'effMinor'
  },{
    name: 'F#',
    class: 'effSharp'
  },{
    name: 'G',
    class: 'gee'
  },{
    name: 'Gm',
    class: 'geeMinor'
  },{
    name: 'G#',
    class: 'geeSharp'
  },{
    name: 'A',
    class: 'aue'
  },{
    name: 'Am',
    class: 'aueMinor'
  },{
    name: 'A#',
    class: 'aueSharp'
  },{
    name: 'H',
    class: 'eich'
  },{
    name: 'Hm',
    class: 'eichMinor'
  }]
  constructor() {
    this.chords.forEach((elem:any, ind:number) => {
      this.allChords.forEach((elem2:any, ind2:number) => {
        if(ind2 > 18 && ind2 < 37) {
          if(elem.name === elem2.name) {
            elem.duurit.push(this.allChords[ind2])
            elem.duurit.push(this.allChords[ind2+8])
            elem.duurit.push(this.allChords[ind2+12])
            elem.mollit.push(this.allChords[ind2-4])
            elem.mollit.push(this.allChords[ind2+4])
            elem.mollit.push(this.allChords[ind2+7])
          }
        }
      })
    })
  }
}
