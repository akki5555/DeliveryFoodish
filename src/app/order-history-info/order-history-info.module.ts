import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { OrderHistoryInfoPageRoutingModule } from './order-history-info-routing.module';

import { OrderHistoryInfoPage } from './order-history-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 	TranslateModule,	  
    OrderHistoryInfoPageRoutingModule
  ],
  declarations: [OrderHistoryInfoPage]
})
export class OrderHistoryInfoPageModule {}
