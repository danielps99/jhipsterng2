import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';

@Component({
    selector: 'jhi-pedido-detail',
    templateUrl: './pedido-detail.component.html'
})
export class PedidoDetailComponent implements OnInit, OnDestroy {

    pedido: Pedido;
    private subscription: any;

    constructor(
        private pedidoService: PedidoService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.pedidoService.find(id).subscribe(pedido => {
            this.pedido = pedido;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
