import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';

const routes: Routes = [{path: '', component: GenerateNumbersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
