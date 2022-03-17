import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }

  check(name: string) {
    return this.cookieService.check(name);
  }

  get(name: string) {
    return this.cookieService.get(name);
  }

  getAll() {
    return this.cookieService.getAll();
  }

  set(name: string, value: string, options?: {
    expires?: number | Date,
    path?: '/',
    domain?: string,
    secure?: boolean,
    sameSite?: 'Lax' | 'None' | 'Strict'
  }) {
    this.cookieService.set(name, value, options);
  }

  delete(name: string, path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax') {
    this.cookieService.delete(name);
  }

  deleteAll(path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax') {
    this.cookieService.deleteAll();
  }
}
