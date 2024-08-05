import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
