import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  checkingSearch: string = '';
  isChecked: boolean = false;
  shuffleCocktail: boolean = false;
  searchNameIng: string = '';
  drink: any = {
    ingredients: [],
    instructions: [],
  };
  drinks: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .subscribe((response: any) => {
        this.drink = response.drinks[0];
        this.drink.ingredients = [];
        this.drink.instructions = [];
        Object.keys(this.drink).forEach((key) => {
          if (key.startsWith('strIngredient') && this.drink[key]) {
            const index = key.replace('strIngredient', '');
            console.log(index);
            this.drink.ingredients.push({
              name: this.drink[key],
              measure: this.drink['strMeasure' + index],
            });
          }
          if (key.startsWith('strInstructions') && this.drink[key]) {
            let lang = key.replace('strInstructions', '');
            if (!lang) {
              lang = 'EN';
            }
            console.log(lang);
            this.drink.instructions[lang] = this.drink[key];
          }
        });
        console.log(this.drink);
      });
  }

  featuredIngredient = (searchValue: string) => {
    console.log(searchValue);
    this.apiService
      .searchButtonCocktailByIngredient(searchValue)
      .subscribe((response: any) => {
        console.log(response);
        this.drink = response.drink;
        if (!this.drink) {
          this.drink = [];
        }
      });
  };
  searchByName = () => {
    this.apiService
      .searchCocktailByName(this.searchNameIng)
      .subscribe((response: any) => {
        if (!response) {
          this.drink = [];
        } else {
          delete this.drink?.strDrinkThumb;
          this.drink = response.drinks[0];
          this.drink.ingredients = [];
          this.drink.instructions = [];
          console.log(this.drink);
          Object.keys(this.drink).forEach((key) => {
            if (key.startsWith('strIngredient') && this.drink[key]) {
              const index = key.replace('strIngredient', '');
              console.log(index);
              this.drink.ingredients.push({
                name: this.drink[key],
                measure: this.drink['strMeasure' + index],
              });
            }
            if (key.startsWith('strInstructions') && this.drink[key]) {
              let lang = key.replace('strInstructions', '');
              if (!lang) {
                lang = 'EN';
              }
              console.log(lang);
              this.drink.instructions[lang] = this.drink[key];
            }
          });
          console.log(this.drink);
        }
      });
  };

  search = () => {
    if (this.searchNameIng !== '') {
      this.isChecked = true;
      return this.searchByName();
    }
  };

  randomCocktail = () => {
    this.apiService.searchRandomCocktail().subscribe((response: any) => {
      if (!response) {
        this.drink = [];
      } else {
        delete this.drink?.strDrinkThumb;
        this.drink = response.drinks[0];
        this.drink.ingredients = [];
        this.drink.instructions = [];
        console.log(this.drink);
        Object.keys(this.drink).forEach((key) => {
          if (key.startsWith('strIngredient') && this.drink[key]) {
            const index = key.replace('strIngredient', '');
            console.log(index);
            this.drink.ingredients.push({
              name: this.drink[key],
              measure: this.drink['strMeasure' + index],
            });
          }
          if (key.startsWith('strInstructions') && this.drink[key]) {
            let lang = key.replace('strInstructions', '');
            if (!lang) {
              lang = 'EN';
            }
            console.log(lang);
            this.drink.instructions[lang] = this.drink[key];
          }
        });
        console.log(this.drink);
      }
    });
  };
}
