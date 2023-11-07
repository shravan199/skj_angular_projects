import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: {
      title: 'Products Page',
      descrption: 'Description of ProductsComponent Component',
      ogTitle: 'Title of ProductsComponent Component for social media',
      ogDescription: 'Description of ProductsComponent Component for social media',
      ogImage: 'ImagePathForSocialMedia'
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductsRoutingModule { }
