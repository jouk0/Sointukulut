import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public perusSointuKulkuData: any = new BehaviorSubject(null)
  public perusSointuKulkuDataOsbserver = this.perusSointuKulkuData.asObservable()

  constructor() { }
  
  setPerusSointuKulkuData(data:any) {
    this.perusSointuKulkuData.next(data)
  }
}
