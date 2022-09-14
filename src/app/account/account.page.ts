import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import {  ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router,   private modalController: ModalController,) { }

  ngOnInit() {
  }
 profile() {
    this.route.navigate(['./my-profile']);
  }
 select_language() {
    this.route.navigate(['./select-language']);
  } 
 terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  } 
 support() {
    this.route.navigate(['./support']);
  } 

  buyappalert () {
    this.modalController
      .create({ component: BuyappalertPage })
      .then(modalElement => {
        modalElement.present()
      })
  }
  developed_by () {
    window.open('https://opuslab.works', '_system', 'location=no')
    
 }
}
