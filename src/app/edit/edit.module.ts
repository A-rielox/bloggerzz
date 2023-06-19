import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { PrimeModule } from '../_prime/prime.module';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftTextComponent } from './left-text/left-text.component';
import { AmigosComponent } from './amigos/amigos.component';

@NgModule({
   declarations: [EditComponent, LeftTextComponent, AmigosComponent],
   imports: [CommonModule,
      PrimeModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule,],
})
export class EditModule {}
