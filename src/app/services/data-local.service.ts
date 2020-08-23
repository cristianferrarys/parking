import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  vehiculo: any[] = [];

  constructor(private storage: Storage) { 
    this.cargarVehiculo();
  }

  guardarVehiculo(vehiculos: any ) {
    const existe = this.vehiculo.find( vehi => vehi.placa === vehiculos.placa );

    if(!existe){
      this.vehiculo.push(vehiculos);
      this.storage.set('vehiculos', this.vehiculo);
    }

  }

  async cargarVehiculo() {
    const vehicu = await this.storage.get('vehiculos');
    this.vehiculo = vehicu || [];
    return this.vehiculo;
  }

}
