import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent {
  constructor() {}

  isRed: boolean = true;
  toggleColor(isRed: boolean): void {
    this.isRed = isRed;
  }
}
