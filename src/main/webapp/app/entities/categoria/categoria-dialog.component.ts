import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Categoria } from './categoria.model';
import { CategoriaPopupService } from './categoria-popup.service';
import { CategoriaService } from './categoria.service';
@Component({
    selector: 'jhi-categoria-dialog',
    templateUrl: './categoria-dialog.component.html'
})
export class CategoriaDialogComponent implements OnInit {

    categoria: Categoria;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private categoriaService: CategoriaService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.categoria.id !== undefined) {
            this.categoriaService.update(this.categoria)
                .subscribe((res: Categoria) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.categoriaService.create(this.categoria)
                .subscribe((res: Categoria) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Categoria) {
        this.eventManager.broadcast({ name: 'categoriaListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-categoria-popup',
    template: ''
})
export class CategoriaPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private categoriaPopupService: CategoriaPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.categoriaPopupService
                    .open(CategoriaDialogComponent, params['id']);
            } else {
                this.modalRef = this.categoriaPopupService
                    .open(CategoriaDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
