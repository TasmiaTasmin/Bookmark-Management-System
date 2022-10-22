import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-bmm';
  value: number = 5;

  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) {}

  // careateOrEditModalPopUp(createOrUpdateModal,id?) {
  //   this.modalService.open(createOrUpdateModal, { size: "lg" });
  // }

  createOrUpdateModal(){
  }

  goToCreateBookmark() {
    this.router.navigate(['bookmark/create']);
  }

  setBookmarkInHistory(){
    //localStorage.setItem('value', JSON.stringify(this.value));
    console.log("data saved successfully");
  }

}
