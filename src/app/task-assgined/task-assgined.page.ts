import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-task-assgined',
  templateUrl: './task-assgined.page.html',
  styleUrls: ['./task-assgined.page.scss'],
})
export class TaskAssginedPage implements OnInit {
 fabAction = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
 
 toggleFab(){
      this.fabAction = !this.fabAction;
   }
	
 order_accepted() {
    this.navCtrl.navigateRoot(['./order-accepted']);
  } 
}
