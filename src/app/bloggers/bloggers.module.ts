import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggersListComponent } from './bloggers-list/bloggers-list.component';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../_prime/prime.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
   declarations: [BloggersListComponent],
   imports: [CommonModule, FormsModule, PrimeModule, ButtonModule],
   exports: [BloggersListComponent],
})
export class BloggersModule {}
