import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
	providers: [Camera]
})
export class AboutPage {
	imgSrc: string;
	constructor(public navCtrl: NavController, private camera: Camera) {
	}

	click_camera() {
		const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData; this.imgSrc = base64Image;
      }).catch((err) => {
        console.log(err);
      });
	}
}
