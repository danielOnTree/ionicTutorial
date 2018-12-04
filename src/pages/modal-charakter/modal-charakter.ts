import { Component } from '@angular/core';
import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'modal-charakter.html'
})
export class ModalCharakter {
  character;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public viewCtrl: ViewController
    ){ 
      
      let characters = [
        {
          name:'Gollum',
          quote: 'Sneaky little hobbitses',
          image: '../assets/imgs/avatar-gollum.jpg',
          properties: [
            { title: 'Race', note: 'Hobbit'},
            { title: 'Culture', note: 'River Folk'},
            { title: 'Alter Ego', note: 'Smeagol'}
          ]
        },
        {
          name:'Frodo',
          quote: 'Go back, Sam! I\'m going to Mordor alone!',
          image: '../assets/imgs/avatar-frodo.jpg',
          properties: [
            { title: 'Race', note: 'Hobbit'},
            { title: 'Culture', note: 'Shire Folk'},
            { title: 'Weapon', note: 'Sting'}
          ]
        },
        {
          name:'Samwise Gamgee',
          quote: 'What we need is few good taters.',
          image: '../assets/imgs/avatar-sam.jpg',
          properties: [
            { title: 'Race', note: 'Hobbit'},
            { title: 'Culture', note: 'Shire Folk'},
            { title: 'Nickname', note: 'Sam'}
          ]
        }
      ];
      console.log(this.navParams.get('character'));
      this.character = characters[this.navParams.get('character')];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}