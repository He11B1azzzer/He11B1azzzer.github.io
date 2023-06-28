import {Component} from '@angular/core';
import {DataExportService} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data$ = this.dataExportService.getData();

  constructor(private readonly dataExportService: DataExportService) {}
}
