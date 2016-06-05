import { Component } from '@angular/core';
import { TestRunSummaryComponent } from './test-run-summary.component'

@Component({
    templateUrl: 'app/test-runs/test-run-dashboard.component.html',
    directives: [TestRunSummaryComponent]
})

export class TestRunDashboardComponent {
    public pageTitle: string = 'Test Runs';
}