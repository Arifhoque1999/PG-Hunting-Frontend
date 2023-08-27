import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  value: Number = 50;
  userSearch: FormGroup | any;
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>;
  date3!: Date;
  filter: boolean = false;
  isShow: boolean = true;

  constructor(private formBuldider: FormBuilder) {}

  toggleFedlter(isShow: boolean) {
    this.filter = this.filter;
    this.isShow = ! this.isShow;
  }
  ngOnInit(): void {
    this.userSearch = this.formBuldider.group({
      location: ['', Validators.required],
      date: ['', Validators.required],
      typePg: ['', Validators.required],
      typeRoom: ['', Validators.required],
      typeFlat1: ['', Validators.required],
      typeFlat2: ['', Validators.required],
    });

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  userSearchOptin() {
    console.log(this.userSearch);
  }
}
