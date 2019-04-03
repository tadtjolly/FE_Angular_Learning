import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorysComponent } from '../app/moudle/categorys/categorys.component';
import { DetailsComponent } from '../app/moudle/details/details.component';

const routes: Routes = [
    { path: 'categorys', component: CategorysComponent },
    { path: 'detail', component: DetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
