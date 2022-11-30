import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  // search

  searchCocktailByName(name: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name
    );
  }

  searchCocktailByIngredient(name: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name
    );
  }

  searchButtonCocktailByIngredient(name: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name
    );
  }

  // lookup
  searchRandomCocktail() {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
  }
  // list
  // filter

  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter
    );
  }

  // searchByS
}
