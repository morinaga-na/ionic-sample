import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
	providers: [BarcodeScanner, Camera]
})
export class AboutPage {
	imgSrc: string;
	constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private camera: Camera) {
	}

	click_qr() {
		this.barcodeScanner.scan()
			.then((result) => {
				alert(
					"We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled
				)
			})
			.catch((error) => {
				alert(error);
			})
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
