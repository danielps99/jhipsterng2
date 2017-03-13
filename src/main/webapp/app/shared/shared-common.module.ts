import { NgModule, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AlertService } from 'ng-jhipster';

import {
    Jhipsterng2SharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';


export function alertServiceProvider(sanitizer: Sanitizer) {
    // set below to true to make alerts look like toast
    let isToast = false;
    return new AlertService(sanitizer, isToast);
}

@NgModule({
    imports: [
        Jhipsterng2SharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer]
        },
        Title
    ],
    exports: [
        Jhipsterng2SharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class Jhipsterng2SharedCommonModule {}
