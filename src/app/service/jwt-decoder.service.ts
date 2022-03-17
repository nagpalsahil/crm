import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService {

  constructor(private sessionService: SessionService) { }

  getJWTPayload(): any {
    try {
      return jwt_decode(this.sessionService.getItem('access_token'));
    } catch (Error) {
      return null;
    }
  }
}
