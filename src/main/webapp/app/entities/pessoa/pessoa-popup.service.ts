import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';
@Injectable()
export class PessoaPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private pessoaService: PessoaService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.pessoaService.find(id).subscribe(pessoa => {
                this.pessoaModalRef(component, pessoa);
            });
        } else {
            return this.pessoaModalRef(component, new Pessoa());
        }
    }

    pessoaModalRef(component: Component, pessoa: Pessoa): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.pessoa = pessoa;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
