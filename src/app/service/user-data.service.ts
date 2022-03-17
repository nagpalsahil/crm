import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { JwtDecoderService } from './jwt-decoder.service';
import { Observable } from 'rxjs';
import { ApiConstant } from '../core/enum/api-constant.enum';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {
    api: ApiConstant;
    constructor(private http: HttpClient, private jwtdecoder: JwtDecoderService, private sessionService: SessionService) { }

    /**
     * get user by user name and password
     * @param username
     * @param password
     */
    getUserByUserNameAndPassword(login: Login): any {
        if(login.username=='test' && login.password=='Test@123'){
            this.sessionService.setItem('access_token', "user logged in");
            return true;
        }
        else
            return false;
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // };
        // return this.http.post(environment.apiUrl + ApiConstant.authorization, JSON.stringify(login), httpOptions).pipe(
        //     delay(1000),
        //     tap((val: any) => {
        //         if (val.access_token !== '') {
        //             this.sessionService.setItem('access_token', val.access_token);
        //         }
        //     }),
        // );
    }

    getConfirmationPopDisplay(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.sessionService.getItem('access_token')
            })
        };
        return this.http.get(environment.apiUrl + ApiConstant.confirmationReq, httpOptions);
    }

    /**
     * add new user
     * @param userName
     * @param password
     * @param emailId
     * @param birthDate
     */
    addUser(userName: string, password: string, emailId: string, birthDate: Date): boolean {
        return true;
    }
}