import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { PessoaDetailComponent } from '../../../../../../main/webapp/app/entities/pessoa/pessoa-detail.component';
import { PessoaService } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.service';
import { Pessoa } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.model';

describe('Component Tests', () => {

    describe('Pessoa Management Detail Component', () => {
        let comp: PessoaDetailComponent;
        let fixture: ComponentFixture<PessoaDetailComponent>;
        let service: PessoaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [PessoaDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    PessoaService
                ]
            }).overrideComponent(PessoaDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PessoaDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PessoaService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Pessoa(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.pessoa).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
