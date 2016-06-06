import { Component, OnInit } from '@angular/core';
import { TestRunSummaryComponent } from './test-run-summary.component'
//import { TestRunService } from './test-run.service';
//import { ITestRun } from './test-run';

@Component({
    templateUrl: 'app/test-runs/test-run-dashboard.component.html',
    directives: [TestRunSummaryComponent]
})

export class TestRunDashboardComponent implements OnInit {
    public pageTitle: string = 'Test Runs';
    
    /*testRuns: ITestRun[];
    errorMessage: string;
    
    constructor(private _testRunService: TestRunService) {
        
    }*/
    
    ngOnInit(): void {
           /*this._testRunService.getTestRuns()
                     .subscribe(
                       testRuns => this.testRuns = testRuns,
                       error =>  this.errorMessage = <any>error);*/
    }
}