import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
})
export class OrdiniComponent {
  typeOfSearch: string = '';
  isChecked: boolean = false;
  shuffleCocktail: boolean = false;
  searchNameIng: string = '';

  drink: any = {
    ingredients: [],
    instructions: [],
  };

  h: any;

  drinks: any[] = [];
  drinksIntoCart: any[] = [];
  drinksTest: any[] = [];

  fullArray: boolean = false;
  toggle: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  searchByName = () => {
    this.apiService
      .searchCocktailByName(this.searchNameIng)
      .subscribe((response: any) => {
        console.log(response);
        this.isChecked = false;
        if (!response) {
          this.drinks = [];
        } else {
          this.drinks = response.drinks;
        }

        if (!this.drinks) {
          this.drinks = [];
          this.isChecked = false;
        }

        this.drinks.sort((a: any, b: any) => {
          const nameA = a.strDrink.toUpperCase(); // ignore upper and lowercase
          const nameB = b.strDrink.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      });
  };

  clickToOrder(item: any) {
    if (this.fullArray === false) {
      this.drinksIntoCart.push(item);
      this.toggle = true;

      console.log(this.drinksIntoCart);
      console.log(this.drinksTest);

      item.selected = true;

      if (this.drinksIntoCart.length > 5) {
        this.fullArray = true;
        this.drinksIntoCart.splice(this.drinksIntoCart.length - 1);
        item.selected = false;
        alert('Non puoi selezionare più di 5 drink!!!');
      }

      this.fullArray = false;
    }
  }

  removeItem(drink: any) {
    this.drinksIntoCart.splice(this.drinksIntoCart.indexOf(drink), 1);
    drink.selected = false;
  }

  warningCart() {
    if (this.drinksIntoCart.length < 2) {
      alert('Selezionare più di un drink per procedere al pagamento!');
    }
  }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
