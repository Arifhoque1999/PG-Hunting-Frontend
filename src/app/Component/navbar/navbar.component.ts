import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar1:any
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  showLogoutButton: boolean = false;
  constructor( private authService:AuthServiceService ) {}

  toggleLogoutButton() {
    this.showLogoutButton = !this.showLogoutButton;
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Registration', icon: '', routerLink: '/registration' },
      { label: 'Our Service', icon: '', routerLink: '/our-service' },
      { label: 'Book Flat', icon: '', routerLink: '/book-flat' },
      { label: 'Post PG', icon: '', routerLink: '/post-pg' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[
      (this.items as MenuItem[]).length - 1
    ];
  }
  userLogOut() {
    this.authService.logout()
  }
}
