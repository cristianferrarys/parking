import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';


@Component({
  selector: 'app-lis-vehiculos',
  templateUrl: './lis-vehiculos.page.html',
  styleUrls: ['./lis-vehiculos.page.scss'],
})
export class LisVehiculosPage implements OnInit {

  liVehiculos: any;

  constructor( public localvehiculo: DataLocalService ) {
   }

  async ngOnInit() {
    await this.cargardata();
  }
  async ionViewWillEnter() {
    await this.cargardata();
  }

 async cargardata() {
  var algo  = await this.localvehiculo.cargarVehiculo();
  this.liVehiculos = algo;
  return this.liVehiculos;
}

}
