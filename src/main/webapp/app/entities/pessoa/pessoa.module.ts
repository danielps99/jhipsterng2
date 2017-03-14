import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterng2SharedModule } from '../../shared';

import {
    PessoaService,
    PessoaPopupService,
    PessoaComponent,
    PessoaDetailComponent,
    PessoaDialogComponent,
    PessoaPopupComponent,
    PessoaDeletePopupComponent,
    PessoaDeleteDialogComponent,
    pessoaRoute,
    pessoaPopupRoute,
    PessoaResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...pessoaRoute,
    ...pessoaPopupRoute,
];

@NgModule({
    imports: [
        Jhipsterng2SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PessoaComponent,
        PessoaDetailComponent,
        PessoaDialogComponent,
        PessoaDeleteDialogComponent,
        PessoaPopupComponent,
        PessoaDeletePopupComponent,
    ],
    entryComponents: [
        PessoaComponent,
        PessoaDialogComponent,
        PessoaPopupComponent,
        PessoaDeleteDialogComponent,
        PessoaDeletePopupComponent,
    ],
    providers: [
        PessoaService,
        PessoaPopupService,
        PessoaResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterng2PessoaModule {}
