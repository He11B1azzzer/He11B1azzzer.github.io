import {Injectable} from '@angular/core';
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Data} from "../models/data";

@Injectable()
export class DataExportService {
    private readonly data$ = this.httpClient.get<Data>('../assets/data.json');
    private readonly professionalProfile$ = this.httpClient.get('../assets/professional-profile.txt', {responseType: 'text'});
    private readonly coreSkills$ = this.httpClient.get('../assets/core-skills.txt', {responseType: 'text'});

    constructor(private readonly httpClient: HttpClient) {}

    public getData(): Observable<Data> {
        return forkJoin([
            this.data$,
            this.professionalProfile$,
            this.coreSkills$
        ]).pipe(map(([data, profileTxt, coreSkills]) => {
            data.aboutMe.professionalProfile = profileTxt;
            data.aboutMe.coreSkills = coreSkills.split('\n').filter(Boolean);
            return data;
        }));
    }
}
