import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CatalogOnlineSharedModule } from 'app/shared/shared.module';
import { CatalogOnlineCoreModule } from 'app/core/core.module';
import { CatalogOnlineAppRoutingModule } from './app-routing.module';
import { CatalogOnlineHomeModule } from './home/home.module';
import { CatalogOnlineEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CatalogOnlineSharedModule,
    CatalogOnlineCoreModule,
    CatalogOnlineHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CatalogOnlineEntityModule,
    CatalogOnlineAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CatalogOnlineAppModule {}
