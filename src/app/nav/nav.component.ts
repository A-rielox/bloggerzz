import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   aClass() {
      return 'flex h-full px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-primary font-medium cursor-pointer transition-colors transition-duration-150';
   }
}
