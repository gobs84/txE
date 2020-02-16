import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItunesAPIService {

  constructor(private _http: HttpClient) { }

  search(term:string){
    console.log(`https://itunes.apple.com/search?term=${term}&media=music&entity=album`);
    return this._http.jsonp<any>(`https://itunes.apple.com/search?term=${term}&media=music&entity=album`,'callback');
  }
}
