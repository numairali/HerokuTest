import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEpisode } from '../shared/model/episodes.model';

type EntityArrayResponseType = HttpResponse<IEpisode[]>;


@Injectable()
export class HomeService {
    public resourceUrl = 'http://api.tvmaze.com/shows/82/episodes';

    constructor(protected http: HttpClient) { }

    query(req?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEpisode[]>(`${this.resourceUrl}`, { observe: 'response' });
    }
}
