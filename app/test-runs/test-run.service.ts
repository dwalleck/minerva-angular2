import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ITestRun } from './test-run';

@Injectable()
export class TestRunService {
    private _testRunUrl = 'http://23.253.76.48/runs';

    constructor(private _http: Http) { }

    getTestRuns(): Observable<ITestRun[]> {
        return this._http.get(this._testRunUrl)
            .map((response: Response) => <ITestRun[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getTestRunsByBuild(buildName: string): Observable<ITestRun> {
        return this._http.get(this._testRunUrl + '?build_name=' + buildName)
            .map((response: Response) => <ITestRun[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}