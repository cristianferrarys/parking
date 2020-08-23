import { Component, OnInit } from '@angular/core';
import { TiempoService } from '../services/tiempo.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  minu: any;
  segund: any;
  constructor(public tiempo: TiempoService) {
  //  this.tiempo.startTimer();
  }

 ngOnInit() {
  this.algo();
 // this.minu = this.tiempo.timeVal;
 // this.segund = this.tiempo.timesegu;
 //console.log(this.minu);
  //console.log('algo');
}

algo() {
  this.tiempo.startTimer().subscribe(( seguMinu ) => {

    this.minu = seguMinu.minutos < 10 ? "0" + seguMinu.minutos : seguMinu.minutos;
    this.segund = seguMinu.segundo < 10 ? "0" + seguMinu.segundo : seguMinu.segundo;
    console.log(seguMinu);
  });
}

}
