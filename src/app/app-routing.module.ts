import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissesComponent} from './components/misses/misses.component';
import {MarksComponent} from './components/marks/marks.component';
import {DebtsComponent} from './components/debts/debts.component';

const routes: Routes = [
  {path: 'misses', component: MissesComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'debts', component: DebtsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
