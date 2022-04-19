import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HourlyViewComponent } from './hourly-view.component';

@NgModule({
	imports: [CommonModule],
	declarations: [HourlyViewComponent],
	exports: [HourlyViewComponent],
})
export class HourlyViewModule {}
