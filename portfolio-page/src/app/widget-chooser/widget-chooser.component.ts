import {Component} from '@angular/core';

@Component({
    selector: 'app-widget-chooser',
    templateUrl: './widget-chooser.component.html',
    styleUrls: ['./widget-chooser.component.scss']
})
export class WidgetChooserComponent {
    selectedWidget: string = '';
    widgetIndex: number = 0;
    widgets = ['pokemon', 'joke', 'nationality', 'crypto'];

    constructor() {
        this.loadWidget();
    }

    loadWidget() {
        this.selectedWidget = this.widgets[this.widgetIndex];
        if (this.widgetIndex < this.widgets.length - 1) {
            this.widgetIndex++;
        } else {
            this.widgetIndex = 0;
        }
    }

}
