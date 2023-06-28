import {Injectable} from '@angular/core';
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Data} from "../models/data";

@Injectable()
export class DataExportService {
  constructor(private readonly httpClient: HttpClient) { }

  public getData(): Observable<Data> {
    return forkJoin([
        this.httpClient.get<Data>('../assets/data.json'),
        this.httpClient.get('../assets/professional-profile.txt', { responseType: 'text' })
    ]).pipe(map(([data, profileTxt]) => {
      data.aboutMe.professionalProfile = profileTxt;
      return data;
    }));
  }
}
