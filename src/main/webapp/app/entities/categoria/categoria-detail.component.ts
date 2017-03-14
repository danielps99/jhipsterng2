import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoria.service';

@Component({
    selector: 'jhi-categoria-detail',
    templateUrl: './categoria-detail.component.html'
})
export class CategoriaDetailComponent implements OnInit, OnDestroy {

    categoria: Categoria;
    private subscription: any;

    constructor(
        private categoriaService: CategoriaService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.categoriaService.find(id).subscribe(categoria => {
            this.categoria = categoria;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
