import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : Ingredient[] = [
    new Ingredient("apple",5),
    new Ingredient("milk",10)
  ]

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
