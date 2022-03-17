import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouteStateService } from './service/route-state.service';
import { Router } from '@angular/router';
import { LoaderService } from './service/loader.service';
import { SessionService } from './service/session.service';
import { CookiesService } from './service/cookies.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Service Estimator';
    showLoader: boolean;
    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig, private routeStateService: RouteStateService, private router: Router, private loaderService: LoaderService,
        private sessionService: SessionService,
        private cookiesService: CookiesService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';

        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        }); 
    }
}
