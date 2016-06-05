import { Component } from '@angular/core';
import { DoughnutChartDemoComponent } from './doughnut-chart-demo.component';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [DoughnutChartDemoComponent]
})
export class WelcomeComponent {
    public pageTitle: string = 'Minerva';
}
