import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterng2SharedModule } from '../../shared';

import {
    ProdutoService,
    ProdutoPopupService,
    ProdutoComponent,
    ProdutoDetailComponent,
    ProdutoDialogComponent,
    ProdutoPopupComponent,
    ProdutoDeletePopupComponent,
    ProdutoDeleteDialogComponent,
    produtoRoute,
    produtoPopupRoute,
    ProdutoResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...produtoRoute,
    ...produtoPopupRoute,
];

@NgModule({
    imports: [
        Jhipsterng2SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ProdutoComponent,
        ProdutoDetailComponent,
        ProdutoDialogComponent,
        ProdutoDeleteDialogComponent,
        ProdutoPopupComponent,
        ProdutoDeletePopupComponent,
    ],
    entryComponents: [
        ProdutoComponent,
        ProdutoDialogComponent,
        ProdutoPopupComponent,
        ProdutoDeleteDialogComponent,
        ProdutoDeletePopupComponent,
    ],
    providers: [
        ProdutoService,
        ProdutoPopupService,
        ProdutoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterng2ProdutoModule {}
