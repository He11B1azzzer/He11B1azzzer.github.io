import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Data} from "../models/data";

@Injectable()
export class DataExportService {
  constructor(private readonly httpClient: HttpClient) { }

  public getData(): Observable<Data> {
    return this.httpClient.get<Data>('../assets/data.json');
  }
}
