import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
// import { Tab1PageRoutingModule } from './tab1-routing.module';
// import { PastComponent } from './past/past.component';
import { ResponseComponent } from '../response/response.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
  declarations: [ ResponseComponent]
})
export class PresentModule {}
