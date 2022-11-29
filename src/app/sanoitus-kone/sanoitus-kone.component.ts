import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'
import { Editor } from 'ngx-editor';

declare const ChordDiagram:any;

@Component({
  selector: 'app-sanoitus-kone',
  templateUrl: './sanoitus-kone.component.html',
  styleUrls: ['./sanoitus-kone.component.scss']
})
export class SanoitusKoneComponent {
  public editor: Editor;
  public htmlContent: string = ''
  public perusSointukulkuData: Array<any> = []
  public valittuSointukulkuData: Array<any> = []
  constructor(private backend: BackendService) {
    
    this.editor = new Editor();
    this.backend.perusSointuKulkuDataOsbserver.subscribe((response:any) => {
      if(response) {
        console.log(response)
        this.perusSointukulkuData = response
      }
    })
    this.editor.valueChanges.subscribe((response) => {
      console.log(response)
    })
  }
  onChange(html: object) {
    console.log(html)
    console.log(this.htmlContent)
  }
  tallenna(e:MouseEvent): void {
    console.log(this.htmlContent)
    console.log(this.editor)
  }
  valitseSointu(e: any) {
    this.perusSointukulkuData.forEach((chord:any, ind:number) => {
      console.log(chord.name, e.target.value)
      if(chord.name === e.target.value) {
        chord.htmlContent = ''
        this.valittuSointukulkuData.push(chord)
      }
    })
    this.draw()
  }
  paivitaSisalto(e: any) {
    console.log(e)
  }
  draw(): void {
    setTimeout(() => {

      const cee = document.querySelectorAll('section.sanoituskone div.cee')
      const ceeSeven = document.querySelectorAll('section.sanoituskone div.ceeSeven')
      const ceeMinor = document.querySelectorAll('section.sanoituskone div.ceeMinor')
      const ceeMinorSeven = document.querySelectorAll('section.sanoituskone div.ceeMinorSeven')
      const ceeCharp = document.querySelectorAll('section.sanoituskone div.ceeCharp')
      const ceeCharpMinor = document.querySelectorAll('section.sanoituskone div.ceeCharpMinor')
      const ceeCharpMinorSeven = document.querySelectorAll('section.sanoituskone div.ceeCharpMinorSeven')
      const ceeCharpSeven = document.querySelectorAll('section.sanoituskone div.ceeCharpSeven')
      const ceeMajor7 = document.querySelectorAll('section.sanoituskone div.ceeMajor7')
      const ceeDim = document.querySelectorAll('section.sanoituskone div.ceeDim')
      const ceeNine = document.querySelectorAll('section.sanoituskone div.ceeNine')
      const ceeSharpMajor7 = document.querySelectorAll('section.sanoituskone div.ceeSharpMajor7')
      const ceeSharpDim = document.querySelectorAll('section.sanoituskone div.ceeSharpDim')
      const ceeSharpNine = document.querySelectorAll('section.sanoituskone div.ceeSharpNine')
      const dee = document.querySelectorAll('section.sanoituskone div.dee')
      const deeSeven = document.querySelectorAll('section.sanoituskone div.deeSeven')
      const deeMinor = document.querySelectorAll('section.sanoituskone div.deeMinor')
      const deeMinorSeven = document.querySelectorAll('section.sanoituskone div.deeMinorSeven')
      const deeCharp = document.querySelectorAll('section.sanoituskone div.deeCharp')
      const deeCharpMinor = document.querySelectorAll('section.sanoituskone div.deeCharpMinor')
      const deeCharpSeven = document.querySelectorAll('section.sanoituskone div.deeCharpSeven')
      const deeCharpMinorSeven = document.querySelectorAll('section.sanoituskone div.deeCharpMinorSeven')
      const deeMajor7 = document.querySelectorAll('section.sanoituskone div.deeMajor7')
      const deeDim = document.querySelectorAll('section.sanoituskone div.deeDim')
      const deeNine = document.querySelectorAll('section.sanoituskone div.deeNine')
      const deeSharpMajor7 = document.querySelectorAll('section.sanoituskone div.deeSharpMajor7')
      const deeSharpDim = document.querySelectorAll('section.sanoituskone div.deeSharpDim')
      const deeSharpNine = document.querySelectorAll('section.sanoituskone div.deeSharpNine')
      const eee = document.querySelectorAll('section.sanoituskone div.eee')
      const eeeSeven = document.querySelectorAll('section.sanoituskone div.eeeSeven')
      const eeeMinor = document.querySelectorAll('section.sanoituskone div.eeeMinor')
      const eeeMinorSeven = document.querySelectorAll('section.sanoituskone div.eeeMinorSeven')
      const eeeMajor7 = document.querySelectorAll('section.sanoituskone div.eeeMajor7')
      const eeeDim = document.querySelectorAll('section.sanoituskone div.eeeDim')
      const eeeNine = document.querySelectorAll('section.sanoituskone div.eeeNine')
      const eff = document.querySelectorAll('section.sanoituskone div.eff')
      const effSeven = document.querySelectorAll('section.sanoituskone div.effSeven')
      const effMinor = document.querySelectorAll('section.sanoituskone div.effMinor')
      const effMinorSeven = document.querySelectorAll('section.sanoituskone div.effMinorSeven')
      const effSharp = document.querySelectorAll('section.sanoituskone div.effSharp')
      const effSharpMinor = document.querySelectorAll('section.sanoituskone div.effSharpMinor')
      const effSharpSeven = document.querySelectorAll('section.sanoituskone div.effSharpSeven')
      const effSharpMinorSeven = document.querySelectorAll('section.sanoituskone div.effSharpMinorSeven')
      const effSharpMinorMinorSeven = document.querySelectorAll('section.sanoituskone div.effSharpMinorMinorSeven')
      const effMajor7 = document.querySelectorAll('section.sanoituskone div.effMajor7')
      const effDim = document.querySelectorAll('section.sanoituskone div.effDim')
      const effNine = document.querySelectorAll('section.sanoituskone div.effNine')
      const effSharpMajor7 = document.querySelectorAll('section.sanoituskone div.effSharpMajor7')
      const effSharpDim = document.querySelectorAll('section.sanoituskone div.effSharpDim')
      const effSharpNine = document.querySelectorAll('section.sanoituskone div.effSharpNine')
      const effMajor = document.querySelectorAll('section.sanoituskone div.effMajor')
      const gee = document.querySelectorAll('section.sanoituskone div.gee')
      const geeSeven = document.querySelectorAll('section.sanoituskone div.geeSeven')
      const geeMinor = document.querySelectorAll('section.sanoituskone div.geeMinor')
      const geeMinorSeven = document.querySelectorAll('section.sanoituskone div.geeMinorSeven')
      const geeSharp = document.querySelectorAll('section.sanoituskone div.geeSharp')
      const geeSharpMinor = document.querySelectorAll('section.sanoituskone div.geeSharpMinor')
      const geeSharpSeven = document.querySelectorAll('section.sanoituskone div.geeSharpSeven')
      const geeSharpMinorSeven = document.querySelectorAll('section.sanoituskone div.geeSharpMinorSeven')
      const geeSharpMinorMinorSeven = document.querySelectorAll('section.sanoituskone div.geeSharpMinorMinorSeven')
      const geeMajor7 = document.querySelectorAll('section.sanoituskone div.geeMajor7')
      const geeDim = document.querySelectorAll('section.sanoituskone div.geeDim')
      const geeNine = document.querySelectorAll('section.sanoituskone div.geeNine')
      const geeSharpMajor7 = document.querySelectorAll('section.sanoituskone div.geeSharpMajor7')
      const geeSharpDim = document.querySelectorAll('section.sanoituskone div.geeSharpDim')
      const geeSharpNine = document.querySelectorAll('section.sanoituskone div.geeSharpNine')
      const aue = document.querySelectorAll('section.sanoituskone div.aue')
      const aueSeven = document.querySelectorAll('section.sanoituskone div.aueSeven')
      const aueMinor = document.querySelectorAll('section.sanoituskone div.aueMinor')
      const aueMinorSeven = document.querySelectorAll('section.sanoituskone div.aueMinorSeven')
      const aueSharp = document.querySelectorAll('section.sanoituskone div.aueSharp')
      const aueSharpMinor = document.querySelectorAll('section.sanoituskone div.aueSharpMinor')
      const aueSharpSeven = document.querySelectorAll('section.sanoituskone div.aueSharpSeven')
      const aueSharpMinorSeven = document.querySelectorAll('section.sanoituskone div.aueSharpMinorSeven')
      const aueSharpMinorMinorSeven = document.querySelectorAll('section.sanoituskone div.aueSharpMinorMinorSeven')
      const aueMajor7 = document.querySelectorAll('section.sanoituskone div.aueMajor7')
      const aueDim = document.querySelectorAll('section.sanoituskone div.aueDim')
      const aueNine = document.querySelectorAll('section.sanoituskone div.aueNine')
      const aueSharpMajor7 = document.querySelectorAll('section.sanoituskone div.aueSharpMajor7')
      const aueSharpDim = document.querySelectorAll('section.sanoituskone div.aueSharpDim')
      const aueSharpNine = document.querySelectorAll('section.sanoituskone div.aueSharpNine')
      const eich = document.querySelectorAll('section.sanoituskone div.eich')
      const eichSeven = document.querySelectorAll('section.sanoituskone div.eichSeven')
      const eichMinor = document.querySelectorAll('section.sanoituskone div.eichMinor')
      const eichMinorSeven = document.querySelectorAll('section.sanoituskone div.eichMinorSeven')
      const eichMajor7 = document.querySelectorAll('section.sanoituskone div.eichMajor7')
      const eichDim = document.querySelectorAll('section.sanoituskone div.eichDim')
      const eichNine = document.querySelectorAll('section.sanoituskone div.eichNine')
      
      
      const chords2: any = [];
      cee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C', positions: [-1, 3, 2, 0, 1, 0], dotColor: '#ff0000'})
      })
      ceeSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C7', positions: [-1, 3, 2, 0, 1, 3], dotColor: '#ff0000'})
      })
      ceeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Cm', positions: [-1, 4, 6, 6, 5, 4], dotColor: '#ff0000'})
      })
      ceeMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Cm7', positions: [-1, 4, 6, 4, 5, 4], dotColor: '#ff0000'})
      })
      ceeCharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#', positions: [-1, 4, 6, 6, 6, 4], dotColor: '#ff5b22'})
      })
      ceeCharpMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#m', positions: [-1, 4, 6, 6, 5, 4], dotColor: '#ff5b22'})
      })
      ceeCharpSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#7', positions: [-1, 4, 6, 4, 6, 4], dotColor: '#ff5b22'})
      })
      ceeCharpMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#m7', positions: [-1, 4, 6, 4, 5, 4], dotColor: '#ff5b22'})
      })
      ceeMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Cmaj7', positions: [-1, 3, 2, 0, 0, 0], dotColor: '#ff5b22'})
      })
      ceeDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Cdim', positions: [-1, -1, 1, 2, 1, 2], dotColor: '#ff5b22'})
      })
      ceeNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C9', positions: [-1, 3, 2, 3, 3, 3], dotColor: '#ff5b22'})
      })
      ceeSharpMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#Maj7', positions: [-1, 4, 3, 1, 1, 1], dotColor: '#ff5b22'})
      })
      ceeSharpDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#dim', positions: [-1, 1, 2, 0, 1, -1], dotColor: '#ff5b22'})
      })
      ceeSharpNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'C#9', positions: [-1, 4, 3, 4, 4, 4], dotColor: '#ff5b22'})
      })
      dee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D', positions: [-1, 5, 7, 7, 7, 5], dotColor: '#ff8000'})
      })
      deeSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D7', positions: [-1, 5, 7, 5, 7, 5], dotColor: '#ff8000'})
      })
      deeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Dm', positions: [-1, 5, 7, 7, 6, 5], dotColor: '#ff8000'})
      })
      deeMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Dm7', positions: [-1, 5, 7, 5, 6, 5], dotColor: '#ff8000'})
      })
      deeCharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#', positions: [-1, 6, 8, 8, 8, 6], dotColor: '#ff9700'})
      })
      deeCharpMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#m', positions: [-1, 6, 8, 8, 7, 6], dotColor: '#ff9700'})
      })
      deeCharpSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#7', positions: [-1, 6, 8, 6, 8, 6], dotColor: '#ff9700'})
      })
      deeCharpMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#m7', positions: [-1, 6, 8, 6, 7, 6], dotColor: '#ff9700'})
      })
      deeMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Dmaj7', positions: [-1, -1, 0, 2, 2, 2], dotColor: '#ff9700'})
      })
      deeDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Ddim', positions: [-1, -1, 0, 1, 0, 1], dotColor: '#ff9700'})
      })
      deeNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D9', positions: [-1, 5, 4, 5, 5, 5], dotColor: '#ff9700'})
      })
      deeSharpMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#Maj7', positions: [-1, 1, 1, 3, 3, -1], dotColor: '#ff9700'})
      })
      deeSharpDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#dim', positions: [-1, -1, 1, 2, 1, 2], dotColor: '#ff9700'})
      })
      deeSharpNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'D#9', positions: [-1, -1, 1, 0, 2, 1], dotColor: '#ff9700'})
      })
      eee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'E', positions: [-1, 7, 9, 9, 9, 7], dotColor: '#ffff00'})
      })
      eeeSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'E7', positions: [-1, 7, 9, 7, 9, 7], dotColor: '#ffff00'})
      })
      eeeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Em', positions: [-1, 7, 9, 9, 8, 7], dotColor: '#ffff00'})
      })
      eeeMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Em7', positions: [-1, 7, 9, 7, 8, 7], dotColor: '#ffff00'})
      })
      eeeMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Emaj7', positions: [0, -1, 1, 1, 0, -1], dotColor: '#ffff00'})
      })
      eeeDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Edim', positions: [-1, 1, 2, 0, 2, -1], dotColor: '#ffff00'})
      })
      eeeNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'E9', positions: [0, 2, 0, 1, 0, 2], dotColor: '#ffff00'})
      })
      eff.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F', positions: [1, 3, 3, 2, 1, 1], dotColor: '#7dff00'})
      })
      effSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F7', positions: [1, 3, 1, 2, 1, 1], dotColor: '#7dff00'})
      })
      effMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fm', positions: [1, 3, 3, 1, 1,1], dotColor: '#7dff00'})
      })
      effMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fm7', positions: [1, 3, 1, 1, 1,1], dotColor: '#7dff00'})
      })
      effSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#', positions: [2, 4, 4, 3, 2, 2], dotColor: '#00fe00'})
      })
      effSharpMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#m', positions: [2, 4, 4, 2, 2, 2], dotColor: '#00fe00'})
      })
      effSharpSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#7', positions: [2, 4, 2, 3, 2, 2], dotColor: '#00fe00'})
      })
      effSharpMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#m7', positions: [2, 4, 2, 2, 2, 2], dotColor: '#00fe00'})
      })
      effSharpMinorMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#m7', positions: [2, 4, 2, 2, 2, 2], dotColor: '#00fe00'})
      })
      effMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fmaj7', positions: [-1, -1, 3, 2, 1, 0], dotColor: '#00fe00'})
      })
      effDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fdim', positions: [1, -1, 0, 1, 0, -1], dotColor: '#00fe00'})
      })
      effNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F9', positions: [1, 3, 1, 3, 1, 3], dotColor: '#00fe00'})
      })
      effMajor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Fmaj', positions: [1, -1, 2, 1, 1, 0], dotColor: '#00fe00'})
      })
      effSharpMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#maj7', positions: [-1, -1, 4, 3, 2, 1], dotColor: '#00fe00'})
      })
      effSharpDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#dim', positions: [2, -1, 1, 2, 1, -1], dotColor: '#00fe00'})
      })
      effSharpNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'F#9', positions: [2, 4, 2, 3, 2, 4], dotColor: '#00fe00'})
      })
      gee.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G', positions: [3, 5, 5, 4, 3, 3], dotColor: '#00fbfe'})
      })
      geeSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G7', positions: [3, 5, 3, 4, 3, 3], dotColor: '#00fbfe'})
      })
      geeMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Gm', positions: [3, 5, 5, 3, 3, 3], dotColor: '#00fbfe'})
      })
      geeMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Gm7', positions: [3, 5, 3, 3, 3, 3], dotColor: '#00fbfe'})
      })
      geeSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#', positions: [4, 6, 6, 5, 4, 4], dotColor: '#0000ff'})
      })
      geeSharpMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#m', positions: [4, 6, 6, 4, 4, 4], dotColor: '#0000ff'})
      })
      geeSharpSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#7', positions: [4, 6, 4, 5, 4, 4], dotColor: '#0000ff'})
      })
      geeSharpMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#m7', positions: [4, 6, 4, 4, 4, 4], dotColor: '#0000ff'})
      })
      geeSharpMinorMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#m7', positions: [4, 6, 4, 4, 4, 4], dotColor: '#0000ff'})
      })
      geeMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Gmaj7', positions: [-1, 2, -1, 0, 3, 2], dotColor: '#0000ff'})
      })
      geeDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Gdim', positions: [-1, 1, 2, 0, 2, -1], dotColor: '#0000ff'})
      })
      geeNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G9', positions: [3, -1, 0, 2, 0, 1], dotColor: '#0000ff'})
      })
      geeSharpMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#maj7', positions: [-1, 3, -1, 1, 4, 3], dotColor: '#0000ff'})
      })
      geeSharpDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#dim', positions: [-1, -1, 0, 1, 0, 1], dotColor: '#0000ff'})
      })
      geeSharpNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'G#9', positions: [4, -1, 1, 3, 1, 2], dotColor: '#0000ff'})
      })
      aue.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A', positions: [5, 7, 7, 6, 5, 5], dotColor: '#4c00db'})
      })
      aueSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A7', positions: [5, 7, 5, 6, 5, 5], dotColor: '#4c00db'})
      })
      aueMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Am', positions: [5, 7, 7, 5, 5, 5], dotColor: '#4c00db'})
      })
      aueMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Am7', positions: [5, 7, 5, 5, 5, 5], dotColor: '#4c00db'})
      })
      aueSharp.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#', positions: [6, 8, 8, 7, 6, 6], dotColor: '#9e00b3'})
      })
      aueSharpMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#m', positions: [6, 8, 8, 6, 6, 6], dotColor: '#9e00b3'})
      })
      aueSharpSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#7', positions: [6, 8, 6, 7, 6, 6], dotColor: '#9e00b3'})
      })
      aueSharpMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#m7', positions: [-1, 1, 3, 1, 2, 1], dotColor: '#9e00b3'})
      })
      aueSharpMinorMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#m7', positions: [-1, 1, 3, 1, 2, 1], dotColor: '#9e00b3'})
      })
      aueMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Amaj7', positions: [-1, 0, 2, 1, 2, 0], dotColor: '#9e00b3'})
      })
      aueDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Adim', positions: [-1, -1, 1, 2, 1, 2], dotColor: '#9e00b3'})
      })
      aueNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A9', positions: [5, -1, 2, 4, 2, 3], dotColor: '#9e00b3'})
      })
      aueSharpMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#maj7', positions: [-1, 1, 3, 2, 3, 1], dotColor: '#9e00b3'})
      })
      aueSharpDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#dim', positions: [-1, 1, -1, 0, 2, 0], dotColor: '#9e00b3'})
      })
      aueSharpNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'A#9', positions: [-1, 1, 0, 1, 1, 1], dotColor: '#9e00b3'})
      })
      eich.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'H', positions: [7, 9, 9, 8, 7, 7], dotColor: '#ff0075'})
      })
      eichSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'H7', positions: [7, 9, 7, 8, 7, 7], dotColor: '#ff0075'})
      })
      eichMinor.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Hm', positions: [7, 9, 9, 7, 7, 7], dotColor: '#ff0075'})
      })
      eichMinorSeven.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Hm7', positions: [7, 9, 7, 7, 7, 7], dotColor: '#ff0075'})
      })
      eichMajor7.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Hmaj7', positions: [-1, -1, 0, 1, 0, 1], dotColor: '#ff0075'})
      })
      eichDim.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'Hdim', positions: [-1, -1, 0, 1, 0, 1], dotColor: '#ff0075'})
      })
      eichNine.forEach((elem: any, ind:number) => {
        chords2.push({parentElement: elem, name: 'H9', positions: [-1, 2, 1, 2, 2, 2], dotColor: '#ff0075'})
      })
      const diagrammer = new ChordDiagram();
      for (const chord of chords2) {
        diagrammer.draw(chord);
      }
    }, 2000)
  }
}
