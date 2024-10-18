import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'home',
      loadComponent: () =>
        import('./components/home/home.component').then(
          (m) => m.HomeComponent
        ),
    },
    {
      path: 'dashboard',
      loadComponent: () =>
        import('./components/dashboard/dashboard.component').then(
          (m) => m.DashboardComponent
        ),
        children:[
          {
            path: '',
            loadComponent: () =>
              import('./components/dashboard-content/dashboard-content.component').then(
                (m) => m.DashboardContentComponent
              ),
          },
          {
            path: '/profile',
            loadComponent: () =>
              import('./components/profile/profile.component').then(
                (m) => m.ProfileComponent
              ),
          }
        ]
    },
    {
      path: 'blogs',
      loadComponent: () =>
        import('./components/blogs/blogs.component').then(
          (m) => m.BlogsComponent
        ),
    },
    {
      path: '**',
      redirectTo: "home"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
