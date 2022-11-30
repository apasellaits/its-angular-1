import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent} from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';

const routes: Routes = [
  /* { path: 'login', component: LoginComponent }, */
  { path: 'home', component: HomeComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'ingredients/:name', component: IngredientsComponent},
  { path: 'ordini', component:  OrdiniComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }