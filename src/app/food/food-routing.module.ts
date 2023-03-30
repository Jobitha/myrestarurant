import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemadeComponent } from './homemade/homemade.component';

const routes: Routes = [
  { path: '', component: HomemadeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
