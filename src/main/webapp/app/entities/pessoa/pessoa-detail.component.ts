import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
    selector: 'jhi-pessoa-detail',
    templateUrl: './pessoa-detail.component.html'
})
export class PessoaDetailComponent implements OnInit, OnDestroy {

    pessoa: Pessoa;
    private subscription: any;

    constructor(
        private pessoaService: PessoaService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.pessoaService.find(id).subscribe(pessoa => {
            this.pessoa = pessoa;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
