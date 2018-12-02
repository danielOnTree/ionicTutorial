import { Component } from '@angular/core';
import {  Platform, 
          ActionSheetController, 
          AlertController 
        } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform,
    private alertCtrl: AlertController
    ) {}

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
}
