import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  product: any;
  products: any;
  rows: number = 10;
  startIndex: number = 0;
  endIndex: number = 9;
  pageNo: number = 1;
  showData: any;
  showButton: boolean = false;
  searchText: string = '';

  constructor() {}

  showToggleButton() {
    this.showButton = !this.showButton;
  }

  ngOnInit(): void {
    forkJoin({
      url1: ajax.get('https://dummyjson.com/products'),
      url2: ajax.get('https://dummyjson.com/carts'),
      url3: ajax.get('https://dummyjson.com/posts'),
    }).subscribe((reponse) => {
      this.product = reponse.url1.response;
      this.products = this.product.products;
      console.log(reponse);

      this.paginator(null, 1);
    });
  }
  paginator(event: any, pageNo?: number) {
    this.pageNo = event ? event.page + 1 : pageNo;
    const index = this.rows * this.pageNo;
    this.startIndex = index - this.rows;
    this.endIndex = index - 1;
    this.showData = this.products.slice(this.startIndex, this.endIndex + 1);
  }

  filterData() {
    this.showData = this.products.filter((data:any) => {
      return (
        data.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        data.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
}
