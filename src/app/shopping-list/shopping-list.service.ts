import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanger = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient("apple",5),
    new Ingredient("milk",10)
  ];

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanger.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanger.next(this.ingredients.slice());
  }
}
 