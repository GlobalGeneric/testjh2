import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Testjh2EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Testjh2JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Testjh2EmployeeMySuffixModule,
        Testjh2JobMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testjh2EntityModule {}
