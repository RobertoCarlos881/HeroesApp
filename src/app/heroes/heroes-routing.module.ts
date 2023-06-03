import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { HeroePagesComponent } from './pages/heroe-pages/heroe-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'new-hero',
        component: NewPagesComponent,
      },
      {
        path: 'search',
        component: SearchPagesComponent,
      },
      {
        path: 'edit/:id',
        component: NewPagesComponent,
      },
      {
        path: 'list',
        component: ListPagesComponent,
      },
      {
        path: ':id',
        component: HeroePagesComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
