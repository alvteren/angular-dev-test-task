import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [CitySearchComponent],
	exports: [CitySearchComponent],
})
export class CitySearchModule {}
