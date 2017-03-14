import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { PedidoComponent } from './pedido.component';
import { PedidoDetailComponent } from './pedido-detail.component';
import { PedidoPopupComponent } from './pedido-dialog.component';
import { PedidoDeletePopupComponent } from './pedido-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class PedidoResolvePagingParams implements Resolve<any> {

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

export const pedidoRoute: Routes = [
  {
    path: 'pedido',
    component: PedidoComponent,
    resolve: {
      'pagingParams': PedidoResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pedidos'
    }
  }, {
    path: 'pedido/:id',
    component: PedidoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pedidos'
    }
  }
];

export const pedidoPopupRoute: Routes = [
  {
    path: 'pedido-new',
    component: PedidoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pedidos'
    },
    outlet: 'popup'
  },
  {
    path: 'pedido/:id/edit',
    component: PedidoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pedidos'
    },
    outlet: 'popup'
  },
  {
    path: 'pedido/:id/delete',
    component: PedidoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pedidos'
    },
    outlet: 'popup'
  }
];
