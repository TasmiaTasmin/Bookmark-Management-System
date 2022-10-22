import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkCreateComponent } from './pages/bookmark-create/bookmark-create.component';
import { BookmarkViewComponent } from './pages/bookmark-view/bookmark-view.component';

@NgModule({
  declarations: [
    BookmarkCreateComponent,
    BookmarkViewComponent,
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule
  ]
})
export class BookmarkModule { }
