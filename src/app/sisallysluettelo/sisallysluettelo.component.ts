import { Component } from '@angular/core';

@Component({
  selector: 'app-sisallysluettelo',
  templateUrl: './sisallysluettelo.component.html',
  styleUrls: ['./sisallysluettelo.component.scss']
})
export class SisallysluetteloComponent {

  public sivut: Array<any> = [{
    nimi: 'Sisällysluettelo',
    sivut: '1'
  }, {
    nimi: 'Johdanto',
    sivut: '2'
  },{
    nimi: 'Sointukulku taulukko',
    sivut: '3'
  },{
    nimi: 'Otteet Duurit',
    sivut: '4'
  },{
    nimi: 'Otteet Mollit',
    sivut: '5'
  },{
    nimi: 'Riffit',
    sivut: '6-7'
  },{
    nimi: 'Erikois otteet',
    sivut: '8'
  },{
    nimi: 'Flamenko',
    sivut: '9'
  },{
    nimi: 'Omat riffit',
    sivut: '10'
  },{
    nimi: 'Voima sointu riffit',
    sivut: '11-14'
  },{
    nimi: 'Sanoitukset',
    sivut: '15'
  }]
}
