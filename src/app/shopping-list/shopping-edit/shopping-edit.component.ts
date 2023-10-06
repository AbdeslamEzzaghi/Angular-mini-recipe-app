import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
 
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

  @Output()
  ingredient = new EventEmitter<Ingredient>();

  addItem(){
    this.ingredient.emit(new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value))
  }
}
