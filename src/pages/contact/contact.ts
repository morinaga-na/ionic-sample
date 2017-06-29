import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [BarcodeScanner, Flashlight]
})
export class ContactPage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private flashlight: Flashlight) {

  }

  click_qr() {
    this.barcodeScanner.scan()
        .then((result) => {
          alert(
              "バーコード取得\n" +
              "取得結果: " + result.text + "\n" +
              "フォーマット: " + result.format + "\n" +
              "キャンセル判定: " + result.cancelled
          )
        })
        .catch((error) => {
          alert(error);
        })
  }
  click_flash_on() {
      console.log(alert(JSON.stringify(this.flashlight.isSwitchedOn())));
      alert(this.flashlight.isSwitchedOn());
      // alert(this.flashlight.switchOn() );
  }

  click_flash_off() {
      this.flashlight.switchOff();
  }

}
