import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {
  vehiculo:any ={
    placas: "ADS 123",
    color: "rojo",
    marca: "fasdfadsf",
    anio: 2222,
    modelo: "dsafadsf",
  }
  constructor(private datavehiculo: DataLocalService) { }

  ngOnInit() {
  }

  agregarVehiculo( fVehiculos: NgForm ) {
    if(!fVehiculos.valid) {
      console.log("no entro ");
      return false 
    }
    console.log(fVehiculos.value);
    this.datavehiculo.guardarVehiculo(fVehiculos.value);
    console.log("se guardo con exito ");
  }
}
