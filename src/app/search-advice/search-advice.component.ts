import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from "@angular/core";
import {  debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-advice',
  templateUrl: './search-advice.component.html',
  styleUrls: ['./search-advice.component.css']
})

export class SearchAdviceComponent implements OnInit {
  @ViewChild('adviceSearchInput', { static: true }) adviceSearchInput: ElementRef;
  searchResult: any;
  isSearching: boolean;

  constructor( private httpClient: HttpClient) {
    this.isSearching = false;
    this.searchResult = {};
  }

  ngOnInit() {
    fromEvent(this.adviceSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , filter(res => res.length > 0 )
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      this.searchGetCall(text).subscribe((res) => {
        this.isSearching = false;
        this.searchResult = res;
      });
    });
  }

  ngAfterViewInit(): void {
    this.adviceSearchInput.nativeElement.focus();
  }

  searchGetCall(query: string) {
    this.adviceSearchInput.nativeElement.blur();

    return this.httpClient.get('https://api.adviceslip.com/advice/search/' + query);

  }

}
