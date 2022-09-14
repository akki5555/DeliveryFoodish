import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-completed',
  templateUrl: './delivery-completed.page.html',
  styleUrls: ['./delivery-completed.page.scss'],
})
export class DeliveryCompletedPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

 tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
 order_history_info() {
    this.route.navigate(['./order-history-info']);
  } 
 wallet() {
    this.route.navigate(['./wallet']);
  } 
}
