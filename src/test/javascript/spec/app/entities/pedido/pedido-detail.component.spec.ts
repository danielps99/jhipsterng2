import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { PedidoDetailComponent } from '../../../../../../main/webapp/app/entities/pedido/pedido-detail.component';
import { PedidoService } from '../../../../../../main/webapp/app/entities/pedido/pedido.service';
import { Pedido } from '../../../../../../main/webapp/app/entities/pedido/pedido.model';

describe('Component Tests', () => {

    describe('Pedido Management Detail Component', () => {
        let comp: PedidoDetailComponent;
        let fixture: ComponentFixture<PedidoDetailComponent>;
        let service: PedidoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [PedidoDetailComponent],
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
                    PedidoService
                ]
            }).overrideComponent(PedidoDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PedidoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PedidoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Pedido(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.pedido).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
