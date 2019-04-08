import { Component, OnInit } from '@angular/core';
import { DataCategoryList } from './model/dataCategory-list-model';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

  headerNameTable = [
    {
      name: 'ID',
    },
    {
      name: 'name',
    },
    {
      name: 'detail',
    },
    {
      name: 'repull',
    }
  ];

  dataTable: DataCategoryList[] = [
    {
      id: 'G1',
      name: 'hihi',
      detail: 'tttt',
      dateRepull: 11111
    },
    {
      id: 'G2',
      name: 'tuanana',
      detail: 'chitiet',
      dateRepull: 22222
    },
  ];

  dataTableDetail: DataCategoryList[];

  checkTableDetail = false;

  constructor() { }

  ngOnInit() {
  }

  clickEdit(e: any) {
    console.log(e);
    this.checkTableDetail = true;
    this.dataTableDetail = [];
    this.dataTableDetail.push(e);
  }

}
