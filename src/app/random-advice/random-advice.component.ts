import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-random-advice',
  templateUrl: './random-advice.component.html',
  styleUrls: ['./random-advice.component.css']
})
export class RandomAdviceComponent implements OnInit {

  constructor(private _http: HttpClient) { }
  randAdvice: any;

  ngOnInit(): void {
    this._http.get('https://api.adviceslip.com/advice')
    .subscribe(response => {

      if(response){
        hideloader();
      }

      this.randAdvice = response;
    });

    function hideloader(){
      const loader =  document.getElementById('loading');
      if(loader) {
        loader.style.display = 'none';
      }
    }
  }

  newRandomAdvice($event: MouseEvent) {
    // disable button for 2 second random advice update.
    ($event.target as HTMLButtonElement).disabled = true;
    ($event.target as HTMLButtonElement).textContent = 'Please wait';
    setTimeout(function(){
      ($event.target as HTMLButtonElement).disabled = false;
      ($event.target as HTMLButtonElement).textContent = 'Get Another';
    },2000);

    // Get new advice.
    this.ngOnInit();
  }

}
