import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{path:'auth',component:AuthComponent},
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  //loadChildren : './recipes/recipes.module#RecipesModule'
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
