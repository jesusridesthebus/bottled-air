import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MarketComponent } from './market/market.component';
import { BottleDetailComponent } from './bottle-detail/bottle-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [ 
    {
      path: '',
      component: AboutComponent
      },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'market',
      component: MarketComponent
      },
    {
      path: 'bottle/:id',
      component: BottleDetailComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);