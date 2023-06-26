import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Data} from "./models/data";
import {data} from "./constants/data";

@Injectable({
  providedIn: 'root'
})
export class DataExportService {

  constructor() { }

  public getData(): Observable<Data> {
    return of(data);
  }
}
