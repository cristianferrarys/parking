import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})
export class CotizarPage implements OnInit {

  minus: any[] = [];
  vehiculo: any[] = [] ;
  cotizar: any = {
    vehiculo: '',
    minutos: '',
    monto: '',
    saldo: '',
    fechayHora: ''

  }
  selecVehiculo = 'NA';
  myDate = new Date().toISOString();
  constructor(private modalCtrl: ModalController,
              private dataservice: DataLocalService) { }

  ngOnInit() { 
    this.cargarMinutos();
    console.log(this.minus);
    this.dataservice.cargarVehiculo()
    .then( vehic => {
      this.vehiculo = vehic;
      console.log(vehic);
    });
  }
  salir(){
    this.modalCtrl.dismiss();
  }
  salirArgumentos() {
    this.modalCtrl.dismiss({
      algo: 'algo'
    });
  }
  cotizarPark( fCotizar: NgForm ) {
    if(!fCotizar.valid) {
      console.log("no entro ");
      return false;
    }
   // this.cotizar.vehiculo = fCotizar.value.aaaa;
    this.cotizar.fechayHora = new Date().toLocaleString();
    console.log(fCotizar.value);
    console.log(this.cotizar);
  }

  cargarMinutos() {
    for (let i = 30 ; i < 200 ; i = i + 30) {
      if (i != undefined ) {
        this.minus.push(i);
      }
    }
  }

}