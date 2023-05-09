import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/produtos/product/product.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ProductDetailComponent } from './pages/produtos/product-detail/product-detail.component';
import { AubayComponentsModule } from '../../projects/aubay-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MaxOperationCountComponent } from './pages/max-operation-count/max-operation-count.component';
import { PrisonBreakComponent } from './pages/prison-break/prison-break.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DefaultLayoutComponent,
    TopMenuComponent,
    ProductDetailComponent,
    MaxOperationCountComponent,
    PrisonBreakComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AubayComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
