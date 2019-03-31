import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from './common-service.service'
import { HttpClientModule } from '@angular/common/http'
import { TransferHttpService } from '@gorniv/ngx-transfer-http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransferHttpService,TransferState,CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
