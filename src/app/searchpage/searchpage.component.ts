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

  ngOnInit() {
  }

  search() {
    if (this.searchParameter) {
      this.searchParameter=this.searchParameter.split(' ').join('+');
      this._itunesAPIService.search(this.searchParameter).subscribe(response => {
        console.log(response);
      },error => {
          console.log("Error", error);
        });
    }
  }

}
