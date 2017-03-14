import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';

import { Pedido } from './pedido.model';
import { PedidoPopupService } from './pedido-popup.service';
import { PedidoService } from './pedido.service';

@Component({
    selector: 'jhi-pedido-delete-dialog',
    templateUrl: './pedido-delete-dialog.component.html'
})
export class PedidoDeleteDialogComponent {

    pedido: Pedido;

    constructor(
        private pedidoService: PedidoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.pedidoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'pedidoListModification',
                content: 'Deleted an pedido'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-pedido-delete-popup',
    template: ''
})
export class PedidoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private pedidoPopupService: PedidoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.pedidoPopupService
                .open(PedidoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
