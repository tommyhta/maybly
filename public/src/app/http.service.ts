import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getYesNo(){
    return this._http.get('/template/5baa9e5d0be88d52449a621f')
  }
  searchYelp(searchBody){
    return this._http.post('/yelpapi', searchBody)
  }
}
