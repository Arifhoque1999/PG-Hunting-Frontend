import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  logInForm: FormGroup | any;

  product: any;
  products: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.logInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    forkJoin({
      url1: ajax.get('https://dummyjson.com/products'),
      url2: ajax.get('https://dummyjson.com/carts'),
      url3: ajax.get('https://dummyjson.com/posts'),
    }).subscribe((reponse) => {
      this.product = reponse.url1.response;
      this.products = this.product.products;
      console.log(this.products);
    });
  }

  onPageChange(event: any) {
    console.log(event);

    if (event.page == 0) {
      alert('i am  page 1');
    }
    if (event.page == 1) {
      alert('i am  page 2');
    }
    if (event.page == 2) {
      alert('i am  page 3');
    }
  }

  onLogIn() {
    console.log(this.logInForm);
  }
}
