import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipsterng2CategoriaModule } from './categoria/categoria.module';
import { Jhipsterng2ProdutoModule } from './produto/produto.module';
import { Jhipsterng2PessoaModule } from './pessoa/pessoa.module';
import { Jhipsterng2PedidoModule } from './pedido/pedido.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jhipsterng2CategoriaModule,
        Jhipsterng2ProdutoModule,
        Jhipsterng2PessoaModule,
        Jhipsterng2PedidoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterng2EntityModule {}
