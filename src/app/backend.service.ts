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

  constructor() { }
  
  setPerusSointuKulkuData(data:any) {
    this.perusSointuKulkuData.next(data)
  }
  setUudetRiffitSointuKulkuData(data:any) {
    this.uudetRiffitSointuKulkuData.next(data)

  }
}
