import { Component, OnInit } from '@angular/core';
import { ItunesAPIService } from '../services/itunes-api.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private _itunesAPIService: ItunesAPIService) { }

  searchParameter: string = "";
  albums:any=[];

  ngOnInit() {
  }

  search() {
    if (this.searchParameter) {
      this._itunesAPIService.search(this.searchParameter).subscribe(response => {
        this.albums=response.results;
      }, error => {
        console.log("Error", error);
      });
    }
  }

  imageExists(album:any){
    if(album.artworkUrl100==undefined){
      return false;
    }else{
      return true;
    }
  }

}
