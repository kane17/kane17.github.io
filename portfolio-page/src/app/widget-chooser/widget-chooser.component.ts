import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.scss']
})
export class WidgetChooserComponent {
  selectedWidget: string = '';
  previous: string = '';

  selectRandomWidget() {
    const widgets = ['pokemon', 'joke', 'nationality', 'crypto'];
    while (this.selectedWidget ==  this.previous) {
      this.selectedWidget = widgets[Math.floor(Math.random() * widgets.length)];
    }
    this.previous = this.selectedWidget;
  }

}
