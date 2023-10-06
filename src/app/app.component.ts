import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page : String = "Recipes"
  goToPage(current_page : String){
    this.page = current_page;
  }
}
