import { Component, Input, OnInit }  from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'mva-run-summary',
    templateUrl: 'app/test-runs/test-run-summary.component.html',
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TestRunSummaryComponent implements OnInit {
    
    jobName: string = 'Test Job';
    lastRun: string = '2 days ago'
    showLegend: boolean = false;
    @Input() passed: number;
    @Input() failed: number;
    @Input() skipped: number;
    
    chartData : number[];  
    doughnutChartLabels: string[] = ['Passed', 'Failed', 'Skipped'];
    doughnutChartColors: string[] = [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ];
    doughtnutChartOptions: any = { legend: {display: false}};
    //doughnutChartData: number[];
    doughnutChartData: any;
    doughnutChartType: string = 'doughnut';
    
    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
    
    ngOnInit(): void {
        //this.doughnutChartData =[this.passed, this.failed, this.skipped]
        this.doughnutChartData = [
            {
                data: [this.passed, this.failed, this.skipped],
                backgroundColor: [
                    "green",
                    "red",
                    "yellow"
                ]
            }];
    }


}