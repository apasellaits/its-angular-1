import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredient/ingredient.component';
import { OrdiniComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'ingredients/:name', component: IngredientsComponent },
  { path: 'ordini', component: OrdiniComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
