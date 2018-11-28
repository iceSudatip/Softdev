import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { comingsoonPage } from '../comingsoon/comingsoon';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemonN',
  templateUrl: 'pokemonN.html',
})
export class pokemonNPage {
  slides = [
    {
      title: "",
      description: "",
      image: "../../assets/imgs/pokemon_N_1.jpg",
    },
    {
      title: "",
      description: "",
      image: "../../assets/imgs/pokemon_N_2.jpg",
    },
    {
      title: "",
      description: "",
      image: "../../assets/imgs/pokemon_N_3.jpg",
    }
  ];
  a:any;
  text:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad pokemonNPage');
  }
  comingsoon(){
    this.navCtrl.push(comingsoonPage)
  }
}
