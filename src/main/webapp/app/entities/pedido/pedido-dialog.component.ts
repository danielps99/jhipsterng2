import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Pedido } from './pedido.model';
import { PedidoPopupService } from './pedido-popup.service';
import { PedidoService } from './pedido.service';
import { Pessoa, PessoaService } from '../pessoa';
@Component({
    selector: 'jhi-pedido-dialog',
    templateUrl: './pedido-dialog.component.html'
})
export class PedidoDialogComponent implements OnInit {

    pedido: Pedido;
    authorities: any[];
    isSaving: boolean;

    pessoas: Pessoa[];
    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private pedidoService: PedidoService,
        private pessoaService: PessoaService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.pessoaService.query().subscribe(
            (res: Response) => { this.pessoas = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.pedido.id !== undefined) {
            this.pedidoService.update(this.pedido)
                .subscribe((res: Pedido) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.pedidoService.create(this.pedido)
                .subscribe((res: Pedido) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Pedido) {
        this.eventManager.broadcast({ name: 'pedidoListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

    trackPessoaById(index: number, item: Pessoa) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-pedido-popup',
    template: ''
})
export class PedidoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private pedidoPopupService: PedidoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.pedidoPopupService
                    .open(PedidoDialogComponent, params['id']);
            } else {
                this.modalRef = this.pedidoPopupService
                    .open(PedidoDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
