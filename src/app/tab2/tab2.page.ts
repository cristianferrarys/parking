import { Component, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CotizarPage } from '../pages/cotizar/cotizar.page';

declare var mapboxgl: any;
declare var turf: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit{
  //// argentina buenos aires 
    lat: number = -34.620965;
    lng: number = -58.384568;
  
 // lat: number = 40.7135;
 // lng: number = -74.0066;


 //lng: number = -67.13734351262877;
 // lat: number = 45.137451890638886
  constructor(private modalCtrl: ModalController) {}


ngAfterViewInit() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW5mZXJyYXJ5cyIsImEiOiJjandyNGthdmUwMmR6NDNseTduZmFxYTU0In0.2yRcKwL0T_IUQDimIrK4AA';
  
  const coordinates = document.getElementById('coordinates');
  
  const map = new mapboxgl.Map({
    //style: 'mapbox://styles/mapbox/light-v10',
    style: 'mapbox://styles/mapbox/streets-v11',
   // center: [-74.0066, 40.7135],
    center: [this.lng,this.lat],
    zoom: 15,
  //  pitch: 45,
  //  bearing: -17.6,
    container: 'map'
  });
map.on('load', () => {
      
      map.resize();
      // marker
      const marker = new mapboxgl.Marker({
        draggable: true,
      })
      .setLngLat([this.lng, this.lat])
      .addTo(map);
         
        function onDragEnd() {
          
          const lngLat = marker.getLngLat();
          coordinates.style.display = 'block';
          var lng_lat = [lngLat.lng,lngLat.lat];

          this.lat = lngLat.lat;
          this.lng = lngLat.lng;

          var pt = turf.point(lng_lat);
          var poly = turf.polygon(poli);
         // console.log(pt);
           /// dentro del poligono si true o no false 
          var resut = turf.booleanPointInPolygon(pt, poly);
          console.log('onDragEnd');
          console.log(resut);
          coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        }        
       marker.on('dragend', onDragEnd);
      // marker
//// prueba 
/*
map.on('click', 'states-layer',  (e) => {
  console.log(e.lngLat.lat);
  var poli_name = e.features[0].properties.name;
  var coor_poli = e.features[0].geometry.coordinates;
});
*/
  map.on('click', (e) => {
    this.lat = e.lngLat.lat;
    this.lng = e.lngLat.lng;
    var lng_lat = [e.lngLat.lng,e.lngLat.lat];
    var pt = turf.point(lng_lat);
    var poly = turf.polygon(poli);
    var resut = turf.booleanPointInPolygon(pt, poly);
    console.log(resut);
    marker.setLngLat(e.lngLat);
  });

//// prueba

   
      const poli = [[
      [-58.3917868,-34.6180863],
      [-58.3917438,-34.6191634],
      [-58.3915722,-34.6191546],
      [-58.3902418,-34.6190045],
      [-58.3888578,-34.6189162],
      [-58.3874201,-34.6188279],
      [-58.385843,-34.6187308],
      [-58.3843517,-34.6186866],
      [-58.3843517,-34.6177507],
      [-58.3917868,-34.6180863],
      [-58.3917868,-34.6180863]
    ]];
    const poly2 = [[
        [-58.3889742, -34.6155512],
        [-58.3916403, -34.6156814],
        [-58.3916483, -34.6168712],
        [-58.3890654, -34.6167322],
        [-58.3889742, -34.6155512],
        [-58.3889742, -34.6155512]
    ]];
    
    map.addLayer({
      'id': 'states-layer',
      'type': 'fill',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
            'type': 'Feature',
            "properties": {
              'name': 'poli'
            },
              'geometry': {
                'type': 'Polygon',
                'coordinates': poli
              } 
            },
            {
              'type': 'Feature',
              "properties": {
                'name': 'poly2'
              },
              'geometry': {
                'type': 'Polygon',
                'coordinates': poly2
              } 
            }                
          ]
        }

      },
      'paint': {
        'fill-color': 'rgba(200, 100, 240, 0.4)',
        'fill-outline-color': 'rgba(200, 100, 240, 1)'
      }
      });
/*
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': poli
            }            
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });
*/


    });
}
async abrirModal() {
  const modal = await this.modalCtrl.create({
    component: CotizarPage,
    componentProps: { value: 123 }
  });
  await modal.present();
  const {data}  = await modal.onDidDismiss();
  console.log(data);
}
}
