import { Component, OnInit } from '@angular/core';
import { BloggresService } from './_services/bloggres.service';
import { Blogger } from './_models/blogger';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   title = 'TheBloggerzz';
   // bloggers: Blogger[] = [];

   constructor(private bloggersService: BloggresService) {}

   ngOnInit(): void {
      this.bloggersService.getBloggers();

      // this.loadBloggers();
   }

   // loadBloggers() {
   //    this.bloggers = this.bloggersService.bloggers;
   // }
}
