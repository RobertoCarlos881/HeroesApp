import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroePagesComponent } from './pages/heroe-pages/heroe-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';


@NgModule({
  declarations: [
    HeroePagesComponent,
    ListPagesComponent,
    LayoutPagesComponent,
    NewPagesComponent,
    SearchPagesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
