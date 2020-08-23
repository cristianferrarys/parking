import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {
  timeVar: any;
  timeVal: any;
  timesegu: any;

  constructor() { }

  startTimer(): Observable<any> {
    this.timeVal = 2;
    this.timeVar = this.timeVal * 30;
    this.timesegu = 30 - 1;

    let observable = new Observable( observer => {
      var ids_  = setInterval(() => {
        observer.next({segundo:this.timesegu,minutos: this.timeVal});
          if ( this.timesegu > 0) {
            this.timesegu--;
          } else {
            this.timesegu = 30;
            this.timeVal--;
          }
          //observer.next(this.timeVal);
          if (this.timeVal < 0 ) {
            clearInterval(ids_);
            observer.complete();
          }
        },1000);
    });
    return observable;
  }


}
