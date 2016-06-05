import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { TestRunDashboardComponent } from './test-runs/test-run-dashboard.component';

@Component({
    selector: 'mh-app',
    template: `
    <div>
        <nav class='navbar navbar-inverse navbar-fixed-top'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/test_runs']">Test Runs</a></li>
                    <li><a [routerLink]="['/test_statistics']">Test Statistics</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS
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
