import { Component, OnInit } from '@angular/core';
import { DataCategoryList } from './model/dataCategory-list-model';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

  dataTable: DataCategoryList[] = [
    {
      id: 'G1',
      name: 'hihi',
      detail: 'tttt',
      dateRepull: null
    },
    {
      id: 'G2',
      name: 'tuanana',
      detail: 'chitiet',
      dateRepull: null
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  clickEdit(e: any) {
    alert('hihi');
    console.log(e);
  }

}
