// Import NgModule decorator to decorate AppRoutingModule class
import { NgModule } from '@angular/core';
// Import RouterModule and Routes type from angular router library
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadingService } from './Shared/custom-preloading.service';

// Import the following 3 components as we will reference
// them in the route definitions below
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';;

// Configure the routes. The Routes type and the
// referenced components are imported above
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'employees', 
        data: { preload: true },
        loadChildren: () => import(`./employees/employee.module`).then(
            m => m.EmployeeModule)
    },
    { path: '**', component: PageNotFoundComponent }
];

// The NgModule decorator is imported above
// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so it is available
// to the module that imports this AppRoutingModule
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

