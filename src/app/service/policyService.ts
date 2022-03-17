import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/policy.model';

@Injectable()
export class PolicyService {

    constructor(private http: HttpClient) { }

    getPolicies() {
        return this.http.get<any>('assets/demo/data/policy-data.json')
        .toPromise();
    }
}