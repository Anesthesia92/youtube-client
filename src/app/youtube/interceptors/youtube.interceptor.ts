import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY= `AIzaSyBVlsf0-Wcg35brVkp82bUYGp_ZzoCiewI`;
    const URL = `https://www.googleapis.com/youtube/v3`;
    return next.handle(
      request.clone({
        url: `${URL}/${request.url}`,
        setParams: {
          key: API_KEY,
        }
      })
    );
}}
