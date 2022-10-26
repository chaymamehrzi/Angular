import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent } , { path:'list', component: ListProductComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
