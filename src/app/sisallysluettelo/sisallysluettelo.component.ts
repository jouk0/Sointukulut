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
    sivut: '6 - 7'
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
    sivut: '11 - 12'
  },{
    nimi: 'Sanoitukset ohjeet ja sapluunat',
    sivut: '13 - 37'
  },{
    nimi: 'Jukan',
    sivut: '38'
  },{
    nimi: 'Uudet riffit + Duurit',
    sivut: '39 - 40'
  },{
    nimi: 'Uudet riffit + Mollit',
    sivut: '41 - 42'
  },{
    nimi: 'AHDCH + Duurit',
    sivut: '43 - 44'
  },{
    nimi: 'AHDCH + Mollit',
    sivut: '44 - 46'
  },{
    nimi: 'EAHCSharp + Duurit',
    sivut: '47 - 48'
  },{
    nimi: 'EAHCSharp + Mollit',
    sivut: '49 - 50'
  },{
    nimi: 'EG#A#CD# + Duurit',
    sivut: '51 - 52'
  },{
    nimi: 'EG#A#CD# + Mollit',
    sivut: '53 - 54'
  }]
}
