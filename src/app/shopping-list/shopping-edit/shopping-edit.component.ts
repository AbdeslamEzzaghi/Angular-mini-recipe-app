import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
 
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput')
  nameRef : ElementRef;
  @ViewChild('amountInput')
  amountRef : ElementRef;

  //@Output()
  //ingredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService : ShoppingListService){

  }

  addItem(){
    let newIngredient : Ingredient = new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  } 
}
