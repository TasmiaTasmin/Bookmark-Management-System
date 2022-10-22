import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.css']
})
export class BookmarkCreateComponent implements OnInit {
  value: number = 5;

  constructor() { }

  ngOnInit() {
  }

  setBookmarkInHistory(){
    localStorage.setItem('value', JSON.stringify(this.value));
  }
}
