import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DailyViewComponent } from './daily-view.component';

@NgModule({
	imports: [CommonModule],
	declarations: [DailyViewComponent],
	exports: [DailyViewComponent],
})
export class DailyViewModule {}
