import { ModalCharakter } from './../modal-charakter/modal-charakter';
import { Component } from '@angular/core';
import {  Platform, 
          ActionSheetController, 
          AlertController,
          LoadingController,
          ModalController,
          ToastController
        } from 'ionic-angular';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
    this.isAndroid = platform.is('android');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'User wass added',
      duration: 3000,
      position: position
    });
    toast.present();
  }

  gender: string = "f";
  gaming: string = "pc";

  game: string = "assassinsCreed";
  isAndroid: boolean = false;

  searchQuery: string = '';
  cities: string[];
  
  initCities(){
    this.cities = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getCities(e: any){
    this.initCities();
    let value = e.target.value;
    if(value !== ''){
      this.cities = this.cities.filter((city) => {
        return (city.toLowerCase().indexOf(value.toLowerCase()) > -1);
      })
    }
  }

  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60};
  text: number = 0;

  showModal(character) {
    let modal = this.modalCtrl.create(ModalCharakter, character);
    modal.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000
    });
    loader.present();
  }


  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selcted Item", item);
  }

  myIcon: string = "home";

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number =  0;

  pressEvent(e) {
    this.press++;
  }
  
  panEvent(e) {
    this.pan++;
  }

  swipeEvent(e) {
    this.swipe++;
  }

  tapEvent(e) {
    this.tap++;
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }  

    openMenu() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Push a button',
        cssClass: '../app/app.scss',
        buttons: [
          {
            text: 'Delete',
            icon: 'trash',
            handler: () => {
              alert('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: 'share',
            handler: () => {
              alert('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: 'arrow-dropright-circle',
            handler: () => {
              alert('Play clicked');
            }
          },
          {
             text: 'Favorite',
             icon: 'heart-outline',
             handler: () => {
               console.log('Favorite clicked');
             }
          },
          {
            text: 'Cancel',
            icon: 'close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

    doAlert() {
      let alert = this.alertCtrl.create({
        title: 'New Frind!',
        message: 'Message from friend',
        buttons: ['Ok']
      });
      alert.present();
    }

    doPromptAlert(){
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          }
        ],
        buttons: [
          {
            text:'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text:'Save',
            handler: data => {
              console.log(data.title);
            }
          }
        ]
      });
      prompt.present();
    }

    doConfirm() {
      let confirm = this.alertCtrl.create({
        title: 'User this?',
        message: 'Do u agree?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
    }

    doRadio() {
      let radio = this.alertCtrl.create();
      radio.setTitle('Lightsaber color');

      radio.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      radio.addInput({
        type: 'radio',
        label: 'Yellow',
        value: 'yellow',
        checked: false
      });

      radio.addButton('Cancel');
      radio.addButton({
        text: 'Ok',
        handler: data => {
          console.log(data);
        }
      })
      radio.present();
    }
    
    doCheckbox() {
      let checkbox = this.alertCtrl.create();
      checkbox.setTitle('Which planets have u visited?');
      checkbox.addInput({
        type: 'checkbox',
        label: 'Anus',
        value: 'anus',
        checked: false
      });
      checkbox.addInput({
        type: 'checkbox',
        label: 'Venus',
        value: 'venus',
        checked: false
      });
      checkbox.addInput({
        type: 'checkbox',
        label: 'jupiter',
        value: 'jupiter',
        checked: false
      });
      checkbox.addInput({
        type: 'checkbox',
        label: 'Earth',
        value: 'earth',
        checked: false
      });
      checkbox.addButton('Cancel');
      checkbox.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Checkbox data', data);          
        }
      });
      checkbox.present();    
    }
}