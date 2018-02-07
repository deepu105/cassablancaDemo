import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CassablancaDemoBlogModule } from './blog/blog.module';
import { CassablancaDemoEntryModule } from './entry/entry.module';
import { CassablancaDemoTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CassablancaDemoBlogModule,
        CassablancaDemoEntryModule,
        CassablancaDemoTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CassablancaDemoEntityModule {}
