import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppBase} from "../app-base";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends AppBase {
}
