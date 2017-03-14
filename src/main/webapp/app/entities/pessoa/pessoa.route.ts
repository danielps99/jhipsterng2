import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail.component';
import { PessoaPopupComponent } from './pessoa-dialog.component';
import { PessoaDeletePopupComponent } from './pessoa-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class PessoaResolvePagingParams implements Resolve<any> {

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

export const pessoaRoute: Routes = [
  {
    path: 'pessoa',
    component: PessoaComponent,
    resolve: {
      'pagingParams': PessoaResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pessoas'
    }
  }, {
    path: 'pessoa/:id',
    component: PessoaDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pessoas'
    }
  }
];

export const pessoaPopupRoute: Routes = [
  {
    path: 'pessoa-new',
    component: PessoaPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pessoas'
    },
    outlet: 'popup'
  },
  {
    path: 'pessoa/:id/edit',
    component: PessoaPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pessoas'
    },
    outlet: 'popup'
  },
  {
    path: 'pessoa/:id/delete',
    component: PessoaDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Pessoas'
    },
    outlet: 'popup'
  }
];
