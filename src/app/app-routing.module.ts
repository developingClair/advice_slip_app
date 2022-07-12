import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomAdviceComponent } from './random-advice/random-advice.component';
import { SearchAdviceComponent } from './search-advice/search-advice.component';

const routes: Routes = [
  { path: '', component: RandomAdviceComponent},
  { path: 'search', component: SearchAdviceComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
