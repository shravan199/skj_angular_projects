import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers-routing.module').then(m => m.OffersRoutingModule)
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      title: 'Contact Us Page',
      description: 'Description of Contact Us page',
      ogTitle: 'Description of Contact Us page for social media',
    }//end of data object
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Logout Page',
      descrption: 'Description of Logout Component',
      robots: 'noindex, nofollow',
      ogTitle: 'Description of Logout Component for social media',
    }//end of data object
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Page Not Found - Page',
      descrption: 'Description of PageNotFoundComponent Component'
    }//end of data object
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
