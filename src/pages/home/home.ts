import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu:MenuController) {

  }

  public login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }


}
