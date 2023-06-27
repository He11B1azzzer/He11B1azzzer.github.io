import {Component} from '@angular/core';
import {DataExportService} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data$ = this.dataExportService.getData();

  constructor(private readonly dataExportService: DataExportService) {}
}
