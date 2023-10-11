import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanger = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient("apple",5),
    new Ingredient("milk",10)
  ];

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanger.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanger.emit(this.ingredients.slice());
  }
}
 