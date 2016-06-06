import { Component, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'doughnut-chart-demo',
  templateUrl: 'app/home/doughnut-chart-demo.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DoughnutChartDemoComponent {
  
  @Input() passed: number;
  @Input() failed: number;
  @Input() skipped: number;
  
  public doughnutChartLabels: string[] = ['Passed', 'Failed', 'Skipped'];
  public doughnutChartData: number[] = [this.passed, this.failed, this.skipped];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}