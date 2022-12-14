import { Component, OnInit } from '@angular/core';
declare const ChordDiagram:any;
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.scss']
})
export class EtusivuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const cee = document.querySelectorAll('div.cee')
      const ceeSeven = document.querySelectorAll('div.ceeSeven')
      const ceeMinor = document.querySelectorAll('div.ceeMinor')
      const ceeMinorSeven = document.querySelectorAll('div.ceeMinorSeven')
      const ceeCharp = document.querySelectorAll('div.ceeCharp')
      const ceeCharpMinor = document.querySelectorAll('div.ceeCharpMinor')
      const ceeCharpMinorSeven = document.querySelectorAll('div.ceeCharpMinorSeven')
      const ceeCharpSeven = document.querySelectorAll('div.ceeCharpSeven')
      const ceeMajor7 = document.querySelectorAll('div.ceeMajor7')
      const ceeDim = document.querySelectorAll('div.ceeDim')
      const ceeNine = document.querySelectorAll('div.ceeNine')
      const ceeSharpMajor7 = document.querySelectorAll('div.ceeSharpMajor7')
      const ceeSharpDim = document.querySelectorAll('div.ceeSharpDim')
      const ceeSharpNine = document.querySelectorAll('div.ceeSharpNine')
      const dee = document.querySelectorAll('div.dee')
      const deeSeven = document.querySelectorAll('div.deeSeven')
      const deeMinor = document.querySelectorAll('div.deeMinor')
      const deeMinorSeven = document.querySelectorAll('div.deeMinorSeven')
      const deeCharp = document.querySelectorAll('div.deeCharp')
      const deeCharpMinor = document.querySelectorAll('div.deeCharpMinor')
      const deeCharpSeven = document.querySelectorAll('div.deeCharpSeven')
      const deeCharpMinorSeven = document.querySelectorAll('div.deeCharpMinorSeven')
      const deeMajor7 = document.querySelectorAll('div.deeMajor7')
      const deeDim = document.querySelectorAll('div.deeDim')
      const deeNine = document.querySelectorAll('div.deeNine')
      const deeSharpMajor7 = document.querySelectorAll('div.deeSharpMajor7')
      const deeSharpDim = document.querySelectorAll('div.deeSharpDim')
      const deeSharpNine = document.querySelectorAll('div.deeSharpNine')
      const eee = document.querySelectorAll('div.eee')
      const eeeSeven = document.querySelectorAll('div.eeeSeven')
      const eeeMinor = document.querySelectorAll('div.eeeMinor')
      const eeeMinorSeven = document.querySelectorAll('div.eeeMinorSeven')
      const eeeMajor7 = document.querySelectorAll('div.eeeMajor7')
      const eeeDim = document.querySelectorAll('div.eeeDim')
      const eeeNine = document.querySelectorAll('div.eeeNine')
      const eff = document.querySelectorAll('div.eff')
      const effSeven = document.querySelectorAll('div.effSeven')
      const effMinor = document.querySelectorAll('div.effMinor')
      const effMinorSeven = document.querySelectorAll('div.effMinorSeven')
      const effSharp = document.querySelectorAll('div.effSharp')
      const effSharpMinor = document.querySelectorAll('div.effSharpMinor')
      const effSharpSeven = document.querySelectorAll('div.effSharpSeven')
      const effSharpMinorSeven = document.querySelectorAll('div.effSharpMinorSeven')
      const effSharpMinorMinorSeven = document.querySelectorAll('div.effSharpMinorMinorSeven')
      const effMajor7 = document.querySelectorAll('div.effMajor7')
      const effDim = document.querySelectorAll('div.effDim')
      const effNine = document.querySelectorAll('div.effNine')
      const effSharpMajor7 = document.querySelectorAll('div.effSharpMajor7')
      const effSharpDim = document.querySelectorAll('div.effSharpDim')
      const effSharpNine = document.querySelectorAll('div.effSharpNine')
      const effMajor = document.querySelectorAll('div.effMajor')
      const gee = document.querySelectorAll('div.gee')
      const geeSeven = document.querySelectorAll('div.geeSeven')
      const geeMinor = document.querySelectorAll('div.geeMinor')
      const geeMinorSeven = document.querySelectorAll('div.geeMinorSeven')
      const geeSharp = document.querySelectorAll('div.geeSharp')
      const geeSharpMinor = document.querySelectorAll('div.geeSharpMinor')
      const geeSharpSeven = document.querySelectorAll('div.geeSharpSeven')
      const geeSharpMinorSeven = document.querySelectorAll('div.geeSharpMinorSeven')
      const geeSharpMinorMinorSeven = document.querySelectorAll('div.geeSharpMinorMinorSeven')
      const geeMajor7 = document.querySelectorAll('div.geeMajor7')
      const geeDim = document.querySelectorAll('div.geeDim')
      const geeNine = document.querySelectorAll('div.geeNine')
      const geeSharpMajor7 = document.querySelectorAll('div.geeSharpMajor7')
      const geeSharpDim = document.querySelectorAll('div.geeSharpDim')
      const geeSharpNine = document.querySelectorAll('div.geeSharpNine')
      const aue = document.querySelectorAll('div.aue')
      const aueSeven = document.querySelectorAll('div.aueSeven')
      const aueMinor = document.querySelectorAll('div.aueMinor')
      const aueMinorSeven = document.querySelectorAll('div.aueMinorSeven')
      const aueSharp = document.querySelectorAll('div.aueSharp')
      const aueSharpMinor = document.querySelectorAll('div.aueSharpMinor')
      const aueSharpSeven = document.querySelectorAll('div.aueSharpSeven')
      const aueSharpMinorSeven = document.querySelectorAll('div.aueSharpMinorSeven')
      const aueSharpMinorMinorSeven = document.querySelectorAll('div.aueSharpMinorMinorSeven')
      const aueMajor7 = document.querySelectorAll('div.aueMajor7')
      const aueDim = document.querySelectorAll('div.aueDim')
      const aueNine = document.querySelectorAll('div.aueNine')
      const aueSharpMajor7 = document.querySelectorAll('div.aueSharpMajor7')
      const aueSharpDim = document.querySelectorAll('div.aueSharpDim')
      const aueSharpNine = document.querySelectorAll('div.aueSharpNine')
      const eich = document.querySelectorAll('div.eich')
      const eichSeven = document.querySelectorAll('div.eichSeven')
      const eichMinor = document.querySelectorAll('div.eichMinor')
      const eichMinorSeven = document.querySelectorAll('div.eichMinorSeven')
      const eichMajor7 = document.querySelectorAll('div.eichMajor7')
      const eichDim = document.querySelectorAll('div.eichDim')
      const eichNine = document.querySelectorAll('div.eichNine')
      
      
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
    }, 1000)
  }
}
