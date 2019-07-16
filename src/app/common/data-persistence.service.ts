import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PhoneNumbers } from '../phone-numbers/phone-numbers';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {

  private _dataStoreUrl = '/.netlify/functions/dataStore';
  constructor(private _http: HttpClient) {}

  getPhoneNumbers() {
    this._http.get(this._dataStoreUrl);
  }

  writePhoneNumbers(data: Array<PhoneNumbers>): Observable<any> {
    return this._http.post<Array<PhoneNumbers>>(this._dataStoreUrl, data);
  }

}
