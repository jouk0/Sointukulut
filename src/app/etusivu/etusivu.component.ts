import { Component, OnInit } from '@angular/core';
declare const ChordDiagram:any;
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.scss']
})
export class EtusivuComponent implements OnInit {
  public chords: Array<any> = [{
    name: 'C',
    duurit: [],
    mollit: []
  },{
    name: 'C#',
    duurit: [],
    mollit: []
  },{
    name: 'D',
    duurit: [],
    mollit: []
  },{
    name: 'D#',
    duurit: [],
    mollit: []
  },{
    name: 'E',
    duurit: [],
    mollit: []
  },{
    name: 'F',
    duurit: [],
    mollit: []
  },{
    name: 'F#',
    duurit: [],
    mollit: []
  },{
    name: 'G',
    duurit: [],
    mollit: []
  },{
    name: 'G#',
    duurit: [],
    mollit: []
  },{
    name: 'A',
    duurit: [],
    mollit: []
  },{
    name: 'A#',
    duurit: [],
    mollit: []
  },{
    name: 'H',
    duurit: [],
    mollit: []
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
  public chordProgressions: Array<any> = []
  public showChords = false
  constructor() {
    
    this.chords.forEach((elem:any, ind:number) => {
      this.allChords.forEach((elem2:any, ind2:number) => {
        if(ind2 > 18 && ind2 < 37) {
          if(elem.name === elem2.name) {
            elem.duurit.push(this.allChords[ind2])
            elem.duurit.push(this.allChords[ind2+8])
            elem.duurit.push(this.allChords[ind2+11])
            elem.mollit.push(this.allChords[ind2-4])
            elem.mollit.push(this.allChords[ind2+4])
            elem.mollit.push(this.allChords[ind2+7])
          }
        }
      })
    })
  }
  ngOnInit(): void {
    setTimeout(() => {

      const cee = document.querySelectorAll('div.cee');
      const ceeMinor = document.querySelectorAll('div.ceeMinor');
      const ceeCharp = document.querySelectorAll('div.ceeCharp')
      const dee = document.querySelectorAll('div.dee')
      const deeMinor = document.querySelectorAll('div.deeMinor')
      const deeCharp = document.querySelectorAll('div.deeCharp')
      const eee = document.querySelectorAll('div.eee')
      const eeeMinor = document.querySelectorAll('div.eeeMinor')
      const eff = document.querySelectorAll('div.eff')
      const effMinor = document.querySelectorAll('div.effMinor')
      const effSharp = document.querySelectorAll('div.effSharp')
      const gee = document.querySelectorAll('div.gee')
      const geeMinor = document.querySelectorAll('div.geeMinor')
      const geeSharp = document.querySelectorAll('div.geeSharp')
      const aue = document.querySelectorAll('div.aue')
      const aueMinor = document.querySelectorAll('div.aueMinor')
      const aueSharp = document.querySelectorAll('div.aueSharp')
      const eich = document.querySelectorAll('div.eich')
      const eichMinor = document.querySelectorAll('div.eichMinor')
      
      const chords2: any = [];
      cee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C', positions: [-1, 3, 2, 0, 1, 0], dotColor: '#fdcb03'})
      })
      ceeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Cm', positions: [-1, 4, 6, 6, 5, 4], dotColor: '#fdcb03'})
      })
      ceeCharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#', positions: [-1, 4, 6, 6, 6, 4], dotColor: '#34034b'})
      })
      dee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D', positions: [-1, 5, 7, 7, 7, 5], dotColor: '#03b3fd'})
      })
      deeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Dm', positions: [-1, 5, 7, 7, 6, 5], dotColor: '#03b3fd'})
      })
      deeCharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#', positions: [-1, 6, 8, 8, 8, 6], dotColor: '#f43806'})
      })
      eee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'E', positions: [-1, 7, 9, 9, 9, 7], dotColor: '#fa6ffc'})
      })
      eeeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Em', positions: [-1, 7, 9, 9, 8, 7], dotColor: '#fa6ffc'})
      })
      eff.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F', positions: [1, 3, 3, 2, 1, 1], dotColor: '#02fc25'})
      })
      effMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fm', positions: [1, 3, 3, 1, 1,1], dotColor: '#02fc25'})
      })
      effSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#', positions: [1, 4, 4, 3, 1, 1], dotcolor: '#035845'})
      })
      gee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G', positions: [3, 5, 5, 4, 3, 3], dotcolor: '#fc0202'})
      })
      geeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Gm', positions: [3, 5, 5, 3, 3, 3], dotcolor: '#fc0202'})
      })
      geeSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#', positions: [4, 6, 6, 5, 4, 4], dotcolor: '#10186a'})
      })
      aue.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A', positions: [5, 7, 7, 6, 5, 5], dotcolor: '#fbf5ad'})
      })
      aueMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Am', positions: [5, 7, 7, 5, 5, 5], dotcolor: '#fbf5ad'})
      })
      aueSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#', positions: [6, 8, 8, 7, 6, 6], dotcolor: '#02f3fc'})
      })
      eich.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'H', positions: [7, 9, 9, 8, 7, 7], dotcolor: '#dbc0f4'})
      })
      eichMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Hm', positions: [7, 9, 9, 7, 7, 7], dotcolor: '#dbc0f4'})
      })
      const diagrammer = new ChordDiagram();
      for (const chord of chords2) {
        diagrammer.draw(chord);
      }
    }, 1000)
  }
}
