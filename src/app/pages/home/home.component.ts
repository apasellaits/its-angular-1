import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
 isChecked: boolean = false;
 typeOfSearch: string = '';
 searchNameIng: string = '';
 drinks: any[] = [];
 letters: any[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
 ];

 constructor(private apiService: ApiService) {}

 ngOnInit(): void {
  this.apiService
   .searchCocktailByFirstLetter('a')
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
 }

 searchByLetter = (letter: string) => {
  this.apiService
   .searchCocktailByFirstLetter(letter)
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

 searchByIngredients = () => {
  this.apiService
   .searchCocktailByIngredient(this.searchNameIng)
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
   });
 };

 search = () => {
  if (this.typeOfSearch === 'Cocktail') {
   this.isChecked = true;
   return this.searchByName();
  } else if (this.typeOfSearch === 'Ingredient') {
   this.isChecked = true;
   return this.searchByIngredients();
  }
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

 

 collapsed = true;
 toggleCollapsed(): void {
   this.collapsed = !this.collapsed;
 }
}
