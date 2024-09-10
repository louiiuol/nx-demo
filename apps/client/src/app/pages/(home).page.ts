import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';
import { SharedUiComponent } from '@shared-ui';

@Component({
  selector: 'mkp-home',
  standalone: true,
  imports: [AnalogWelcomeComponent, SharedUiComponent],
  template: ` <mkp-analog-welcome /> <oui-shared-ui /> `,
})
export default class HomeComponent {}
