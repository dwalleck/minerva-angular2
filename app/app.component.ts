import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { TestRunDashboardComponent } from './test-runs/test-run-dashboard.component';
import { TestRunService } from './test-runs/test-run.service';

@Component({
    selector: 'mh-app',
    template: `
    <div>
        <nav class='navbar navbar-inverse'>
            <div class='container'>
                <a class='navbar-brand' [routerLink]="['/welcome']">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/test_runs']">Test Runs</a></li>
                    <li><a [routerLink]="['/test_statistics']">Test Statistics</a></li>
                </ul>
            </div>
        </nav>
        <div class='container body-content'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        TestRunService
    ]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/test_runs', component: TestRunDashboardComponent },
])
export class AppComponent {
    pageTitle: string = 'Minerva';
}
