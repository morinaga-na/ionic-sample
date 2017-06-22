import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Geolocation, HTTP]
})
export class HomePage {
  //Flags
  isLocAvail: boolean;
  isLocError: boolean;

  // options
  enableHighAccuracy: boolean = false;

  //Results
  loc_lng: number;
  loc_lat: number;
  rev_geo: string;

  constructor(private geolocation: Geolocation, private http: HTTP, public navCtrl: NavController) {

  }

  initFlags() {
    this.isLocAvail = false;
    this.isLocError = false;
  }

  ngOnInit() {
    this.initFlags();
  }

  onHighAccuracyChange(t: boolean) {
    this.enableHighAccuracy = t;
  }

  getLocation() {
    this.initFlags();

    // option
    let options: GeolocationOptions = {
      enableHighAccuracy: this.enableHighAccuracy
    };

    //  緯度経度
    this.geolocation.getCurrentPosition(options)
      .then((resp)=>{
        this.loc_lng = resp.coords.longitude;
        this.loc_lat = resp.coords.latitude;

        this.isLocAvail = true;
        this.isLocError = false;
      })
      .catch((err) => {
        this.isLocAvail = false;
        this.isLocError = true;
      });


  }

}
