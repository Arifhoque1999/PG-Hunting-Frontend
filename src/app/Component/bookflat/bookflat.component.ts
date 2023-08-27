import { Component } from '@angular/core';

@Component({
  selector: 'app-bookflat',
  templateUrl: './bookflat.component.html',
  styleUrls: ['./bookflat.component.scss']
})
export class BookflatComponent {
  value!: number;
  visible: boolean = false;
  visible1: boolean = false;


  showDialog() {
    this.visible = true;
  }
  showDialog1() {
    this.visible1 = true;
  }
}
