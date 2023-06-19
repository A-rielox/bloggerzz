import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { PrimeModule } from '../_prime/prime.module';
import { HomeComponent } from './home.component';

@NgModule({
   declarations: [HeroComponent, HomeComponent],
   imports: [CommonModule, PrimeModule],
   exports: [HomeComponent],
})
export class HomeModule {}
