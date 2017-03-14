import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { CategoriaComponent } from './categoria.component';
import { CategoriaDetailComponent } from './categoria-detail.component';
import { CategoriaPopupComponent } from './categoria-dialog.component';
import { CategoriaDeletePopupComponent } from './categoria-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class CategoriaResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const categoriaRoute: Routes = [
  {
    path: 'categoria',
    component: CategoriaComponent,
    resolve: {
      'pagingParams': CategoriaResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categorias'
    }
  }, {
    path: 'categoria/:id',
    component: CategoriaDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categorias'
    }
  }
];

export const categoriaPopupRoute: Routes = [
  {
    path: 'categoria-new',
    component: CategoriaPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categorias'
    },
    outlet: 'popup'
  },
  {
    path: 'categoria/:id/edit',
    component: CategoriaPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categorias'
    },
    outlet: 'popup'
  },
  {
    path: 'categoria/:id/delete',
    component: CategoriaDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categorias'
    },
    outlet: 'popup'
  }
];
