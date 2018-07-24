
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("data");
  }

  onLogout() {
    this.navCtrl.setRoot(HomePage);
  }
}