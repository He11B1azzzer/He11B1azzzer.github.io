import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvHeaderComponent} from "./cv-header/cv-header.component";
import {CvBodyComponent} from "./cv-body/cv-body.component";
import {CvFooterComponent} from "./cv-footer/cv-footer.component";

@NgModule({
    declarations: [
        CvHeaderComponent,
        CvBodyComponent,
        CvFooterComponent
    ],
    exports: [
        CvFooterComponent,
        CvBodyComponent,
        CvHeaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CvModule {
}
