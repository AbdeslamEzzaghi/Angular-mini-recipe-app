import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes : Recipe[] = [
    new Recipe('beef tagine with prunes',"ne of the most important dishes of Moroccan cuisine. The plate is also known as M'assal in Rabat.[1] It is a sweet and salty meat tajine, combining a ras el hanout blend of spices with honey, cinnamon and almonds.","https://pbs.twimg.com/media/F7LjU7cXsAA5HGN?format=jpg&name=medium"),
    new Recipe("Pastilla","Poultry pastilla was traditionally made of squab (fledgling pigeons), but shredded chicken is more often used today.","https://pbs.twimg.com/media/F7LjV9xXgAA0vlc?format=jpg&name=medium"),
    new Recipe("Rfissa","It is traditionally served with chicken and lentils and fenugreek seeds (tifiḍas in Amazigh, helba in Arabic), msemmen, meloui or day-old bread, and the spices blend ras el hanout","https://pbs.twimg.com/media/F7LjXUlXIAA6Nl2?format=jpg&name=medium")
  ]
}