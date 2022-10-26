import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
  
 
  
  ],
  imports: [
    CommonModule,
     FormsModule,
    ProductsRoutingModule,
    
  ]
})
export class ProductsModule { }
