import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output()
  current_page = new EventEmitter<String>();

  goToRecipes(){
    this.current_page.emit("Recipes");
  }
  goToShoppingList(){
    this.current_page.emit("Shopping_List");
  }
}
