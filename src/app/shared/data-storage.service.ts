import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private urlAPI =
    'https://angular-food-app-backend-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.urlAPI, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    //<[key:String]:Recipe>
    this.http.get<Recipe[]>(this.urlAPI).subscribe(
      recipes => {
        this.recipeService.setRecipes(recipes)
        console.log(recipes)
      }
    )
    
    /*.pipe(
      map(
        data => {
          const recipes : Recipe[] = [];
          for(let key in data){
            if(data.hasOwnProperty(key)){
              recipes.push(...data[key])
            }
          }
          return recipes;
        }
      )
    )*/
  }
}
