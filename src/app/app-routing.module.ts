import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MaxOperationCountComponent } from './pages/max-operation-count/max-operation-count.component';
import { PrisonBreakComponent } from './pages/prison-break/prison-break.component';
import { ProductDetailComponent } from './pages/produtos/product-detail/product-detail.component';
import { ProductComponent } from './pages/produtos/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'max-oper-count', component: MaxOperationCountComponent },
      { path: 'prison-break', component: PrisonBreakComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: ProductComponent,
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            canActivate: [AuthGuard],
          },
        ],
      }
      
    ],
  }
  // {
  //   path: 'layout-2',
  //   component: LayoutSemMenuComponent,
  //   children: [
  //     { path: 'detail/:id', component: HeroDetailComponent },
  //     { path: 'heroes', component: HeroesComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
