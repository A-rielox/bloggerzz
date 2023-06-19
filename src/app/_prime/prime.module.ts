import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';

import { SelectButtonModule } from 'primeng/selectbutton';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
   declarations: [],
   imports: [
      CommonModule,
      StyleClassModule,
      SelectButtonModule,

      ButtonModule,
      MenubarModule,
      MenuModule,
      DropdownModule,
      AvatarModule,
      DialogModule,
      DynamicDialogModule,
      InputTextModule,
      InputNumberModule,
      DividerModule,
      TableModule,
      ConfirmPopupModule,
      TooltipModule,
   ],
   exports: [
      StyleClassModule,
      SelectButtonModule,
      ButtonModule,
      MenubarModule,
      MenuModule,
      DropdownModule,
      AvatarModule,
      DialogModule,
      DynamicDialogModule,
      InputTextModule,
      InputNumberModule,
      DividerModule,
      TableModule,
      ConfirmPopupModule,
      TooltipModule,
   ],
})
export class PrimeModule {}
