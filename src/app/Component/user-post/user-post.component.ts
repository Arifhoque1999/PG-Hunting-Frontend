import { Component } from '@angular/core';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent {
  value!: number;
  visible: boolean = false;
  postArray = new Array(50);
  
 
  showDialog() {
    this.visible = true;
  }
}
