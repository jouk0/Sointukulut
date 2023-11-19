import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public perusSointuKulkuData: any = new BehaviorSubject(null)
  public perusSointuKulkuDataOsbserver = this.perusSointuKulkuData.asObservable()
  public uudetRiffitSointuKulkuData: any = new BehaviorSubject(null)
  public uudetRiffitSointuKulkuDataOsbserver = this.uudetRiffitSointuKulkuData.asObservable()
  public ahdchSointuKulkuData: any = new BehaviorSubject(null)
  public ahdchSointuKulkuDataOsbserver = this.ahdchSointuKulkuData.asObservable()
  public eahcSharpSointuKulkuData: any = new BehaviorSubject(null)
  public eahcSharpSointuKulkuDataOsbserver = this.eahcSharpSointuKulkuData.asObservable()
  public egsharpasharpcdsharpSointuKulkuData: any = new BehaviorSubject(null)
  public egsharpasharpcdsharpSointuKulkuDataOsbserver = this.egsharpasharpcdsharpSointuKulkuData.asObservable()
  
  constructor() { }
  
  setPerusSointuKulkuData(data:any) {
    this.perusSointuKulkuData.next(data)
  }
  setUudetRiffitSointuKulkuData(data:any) {
    this.uudetRiffitSointuKulkuData.next(data)
  }
  setAhdchSointuKulkuData(data:any) {
    this.ahdchSointuKulkuData.next(data)
  }
  setEahcSharpSointuKulkuData(data:any) {
    this.eahcSharpSointuKulkuData.next(data)
  }
  setEgsharpasharpcdsharp(data:any) {
    this.egsharpasharpcdsharpSointuKulkuData.next(data)
  }
}
