import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkCreateComponent } from './pages/bookmark-create/bookmark-create.component';
import { BookmarkViewComponent } from './pages/bookmark-view/bookmark-view.component';

const routes: Routes = [
  {
    path:'view',
    component:BookmarkViewComponent
  },
  {
    path:'create',
    component:BookmarkCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule { }
