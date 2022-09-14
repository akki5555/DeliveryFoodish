import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { TaskAssginedPageRoutingModule } from './task-assgined-routing.module';

import { TaskAssginedPage } from './task-assgined.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    TaskAssginedPageRoutingModule
  ],
  declarations: [TaskAssginedPage]
})
export class TaskAssginedPageModule {}
