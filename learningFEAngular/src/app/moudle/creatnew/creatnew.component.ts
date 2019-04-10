import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateNewCustomValidator } from './validator/custom-validator';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DataCategoryList } from 'src/app/moudle/categorys/model/dataCategory-list-model';

@Component({
  selector: 'app-creatnew',
  templateUrl: './creatnew.component.html',
  styleUrls: ['./creatnew.component.css']
})
export class CreatnewComponent implements OnInit {

  nForm: FormGroup;
  status: AbstractControl;
  data: DataCategoryList[] = [];

  constructor(private formbuilder: FormBuilder, private router: Router,
              @Inject(MAT_DIALOG_DATA) public ss: DataCategoryList, dialogRef: MatDialogRef<CreatnewComponent>) { }

  ngOnInit() {
    this.nForm = this.formbuilder.group({
      name: ['', [Validators.required, CreateNewCustomValidator.checkLenghtName]],
      detail: ['', Validators.required]
    });
  }

  showMessError(controlName: string) {
    if (controlName === 'name') {
      return 'vui lòng nhập tên';
    }
    if (controlName === 'detail') {
      return 'vui lòng nhập detail';
    }
    if (controlName === 'ttt') {
      return 'vui lòng nhập ttt';
    }
  }

  onSubmit() {
    if (this.nForm.valid) {
      this.data.push({
        id: this.nForm.controls.name.value,
        name: this.nForm.controls.detail.value,
        detail: '3',
        dateRepull: 1
      });
      console.log('ton tai');
      // this.router.navigate(['detail']);
    } else {
      console.log(this.nForm.get('name'));
      console.log('ko ton tai');
    }
  }

  get f() {
    console.log(this.nForm.controls);
    return this.nForm.controls;
  }

}
