import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SwitcherComponent } from './switcher.component';

@NgModule({
	declarations: [SwitcherComponent],
	exports: [SwitcherComponent],
	imports: [CommonModule, ReactiveFormsModule],
})
export class SwitcherModule {}
