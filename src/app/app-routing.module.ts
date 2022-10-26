import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListProductComponent } from './products/list-product/list-product.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotFoundComponent } from './page/not-found/not-found.component';


const ROUTES: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'index',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
 // {path:'product',component:ListProductComponent},
//  {path:'user',component:UserListComponent},
  {path:'contact', component:ContactComponent},
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
