import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { LeftTextComponent } from './left-text/left-text.component';
import { PrimeModule } from '../_prime/prime.module';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmigosComponent } from './amigos/amigos.component';

@NgModule({
   declarations: [AddComponent, LeftTextComponent, AmigosComponent],
   imports: [
      CommonModule,
      PrimeModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
   ],
   exports: [AddComponent],
})
export class AddModule {}
