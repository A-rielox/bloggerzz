import { Injectable } from '@angular/core';
import { Blogger } from '../_models/blogger';
import { bloggersInit } from '../_dataS/bloggers';

@Injectable({
   providedIn: 'root',
})
export class BloggresService {
   bloggers: Blogger[] = [];

   constructor() {}

   getBloggers() {
      this.bloggers = bloggersInit;
   }

   addBlogger(bloggerToAdd: Blogger) {
      this.bloggers.push(bloggerToAdd);
   }

   editBlogger(bloggerEdited: Blogger) {
      //
      this.bloggers = this.bloggers.map((b) => {
         if (b.id === bloggerEdited.id) return bloggerEdited;
         else return b;
      });
   }

   deleteBlogger(bloggerId: number) {
      // let toDelete = this.bloggers.find((b) => b.id === bloggerId);

      // console.log(toDelete, 'TO DELETE');

      this.bloggers = this.bloggers.filter((b) => b.id !== bloggerId);
   }
}

// export interface Blogger {
//    id: number;
//    name: string;
//    website: string;
//    picture_url: string;
//    email: string;
//    friends: number[];
// }
