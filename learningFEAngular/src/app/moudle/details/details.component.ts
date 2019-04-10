import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'angular-custom-modal';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatnewComponent } from '../creatnew/creatnew.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  createAccount() {
    console.log('222');
  }

  openDialog(): void {
    console.log('ssss');
    const dialogRef = this.dialog.open(CreatnewComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('hihi');
    });

  }
}
