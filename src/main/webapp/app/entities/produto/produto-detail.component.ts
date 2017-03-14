import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'jhi-produto-detail',
    templateUrl: './produto-detail.component.html'
})
export class ProdutoDetailComponent implements OnInit, OnDestroy {

    produto: Produto;
    private subscription: any;

    constructor(
        private produtoService: ProdutoService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.produtoService.find(id).subscribe(produto => {
            this.produto = produto;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
