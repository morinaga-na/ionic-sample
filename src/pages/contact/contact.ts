import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [BarcodeScanner]
})
export class ContactPage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  click_qr() {
    this.barcodeScanner.scan({
            showTorchButton : true,
        })
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
}
