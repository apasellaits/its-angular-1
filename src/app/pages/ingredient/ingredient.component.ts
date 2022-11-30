import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredient.component.html',
})
export class IngredientsComponent implements OnInit {
  drink: any = {
    ingredients: [],
    instructions: [],
  };
  drinks: any[] = [];
  apiService: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const ingredient = this.route.snapshot.paramMap.get('name')!;
    this.httpClient
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient
      )
      .subscribe((response: any) => {
        console.log(response);
        this.drinks = response.drinks;
        if (!this.drinks) {
          this.drinks = [];
        }
      });
  }

  searchByName = () => {
    const input = document.getElementById('inputSearch') as HTMLInputElement;
    const searchValue = input?.value;
    this.apiService
      .searchCocktailByName(searchValue)
      .subscribe((response: any) => {
        console.log(response);
        this.drinks = response.drinks;

        if (!this.drinks) {
          this.drinks = [];
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

  featuredIngredients = () => {
    const input = document.getElementById('inputSearch') as HTMLInputElement;
    const searchValue = input?.value;

    this.apiService
      .searchCocktailByIngredient(searchValue)
      .subscribe((response: any) => {
        console.log(response);
        this.drinks = response.drinks;
        if (!this.drinks) {
          this.drinks = [];
        }
      });
  };

  randomCocktail = () => {
    this.apiService.searchRandomCocktail().subscribe((response: any) => {
      console.log(response);
      this.drinks = response.drinks;

      if (!this.drinks) {
        this.drinks = [];
      }
    });
  };
}
