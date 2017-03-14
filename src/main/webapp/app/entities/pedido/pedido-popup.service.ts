import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';
@Injectable()
export class PedidoPopupService {
    private isOpen = false;
    constructor (
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private pedidoService: PedidoService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.pedidoService.find(id).subscribe(pedido => {
                pedido.data = this.datePipe
                    .transform(pedido.data, 'yyyy-MM-ddThh:mm');
                this.pedidoModalRef(component, pedido);
            });
        } else {
            return this.pedidoModalRef(component, new Pedido());
        }
    }

    pedidoModalRef(component: Component, pedido: Pedido): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.pedido = pedido;
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
