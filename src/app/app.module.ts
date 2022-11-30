import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { IngredientsComponent } from './pages/ingredient/ingredient.component';
import { OrdiniComponent } from './pages/order/order.component';
import { CartItemComponent } from './shared/cartItem/cartItem.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkComponent,
    IngredientsComponent,
    OrdiniComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BlockUIHttpModule.forRoot(),
    BlockUIModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
