import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Pessoa } from './pessoa.model';
import { PessoaPopupService } from './pessoa-popup.service';
import { PessoaService } from './pessoa.service';
@Component({
    selector: 'jhi-pessoa-dialog',
    templateUrl: './pessoa-dialog.component.html'
})
export class PessoaDialogComponent implements OnInit {

    pessoa: Pessoa;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private pessoaService: PessoaService,
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
        if (this.pessoa.id !== undefined) {
            this.pessoaService.update(this.pessoa)
                .subscribe((res: Pessoa) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.pessoaService.create(this.pessoa)
                .subscribe((res: Pessoa) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Pessoa) {
        this.eventManager.broadcast({ name: 'pessoaListModification', content: 'OK'});
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
    selector: 'jhi-pessoa-popup',
    template: ''
})
export class PessoaPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private pessoaPopupService: PessoaPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.pessoaPopupService
                    .open(PessoaDialogComponent, params['id']);
            } else {
                this.modalRef = this.pessoaPopupService
                    .open(PessoaDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
