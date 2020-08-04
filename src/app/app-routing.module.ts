import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DogComponent} from './dog/dog.component'

const routes: Routes = [{
  path:'dog',
  component:DogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
