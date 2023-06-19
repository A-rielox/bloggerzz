import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../_prime/prime.module';

@NgModule({
   declarations: [TextInputComponent],
   imports: [CommonModule, ReactiveFormsModule, PrimeModule],
   exports: [TextInputComponent],
})
export class SharedModule {}
