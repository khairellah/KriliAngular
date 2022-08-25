import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { KcHttpService } from './kc-http/kc-http.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    KcHttpService,
  ]
})
export class KcHttpModule {}