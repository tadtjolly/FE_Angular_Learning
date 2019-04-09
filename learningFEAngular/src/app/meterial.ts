import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,
    MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
    MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
    MatDialogModule, MatCardModule, MatProgressSpinnerModule
} from '@angular/material';



@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule
        , MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
        MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
        MatDialogModule, MatCardModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule
        , MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
        MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
        MatDialogModule, MatCardModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
