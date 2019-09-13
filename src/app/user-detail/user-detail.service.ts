import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../shared/model/user.model';

type EntityResponseType = HttpResponse<IUser>;


@Injectable()
export class UserService {
    public resourceUrl = 'https://randomuser.me/api/';

    constructor(protected http: HttpClient) { }

    query(req?: any): Observable<EntityResponseType> {
        return this.http.get<IUser>(`${this.resourceUrl}`, { observe: 'response' });
    }
}
