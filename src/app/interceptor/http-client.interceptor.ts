import {throwError as observableThrowError,  Observable } from 'rxjs';

import {finalize, catchError} from 'rxjs/operators';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders} from '@angular/common/http';

import { ActivatedRouteSnapshot } from '@angular/router';


import { Injector } from '@angular/core';

export class HttpClientInterceptor implements HttpInterceptor {

    requestCount = 0;
    private routeSnapshot: ActivatedRouteSnapshot;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: this.updateUrl(request.url),
            headers: new HttpHeaders ({
                'Authorization': `Bearer ${this.getToken()}`,
                'Content-Type': 'application/json; charset=utf-8',
            })
        });

        return next.handle(request).pipe(catchError(error => {
            this.handleError(error);
            return observableThrowError(error);
        }));
    }

    getToken() { // appends the token to the request headers
        return localStorage.getItem('app_token');
    }

    private updateUrl(req: string) { //update the url to the proper URL
        return "http://rivaschyper.eastus.cloudapp.azure.com/api/" + req;
    }

    private handleError(error: Response) {
        
    }

    
}


