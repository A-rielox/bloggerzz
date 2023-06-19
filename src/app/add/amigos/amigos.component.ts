import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blogger } from 'src/app/_models/blogger';
import { BloggresService } from 'src/app/_services/bloggres.service';
import { NotificationsService } from 'src/app/notifications/notifications.service';

@Component({
   selector: 'app-amigos',
   templateUrl: './amigos.component.html',
   styleUrls: ['./amigos.component.css'],
})
export class AmigosComponent implements OnInit {
   @Input() bloggers: Blogger[] = [];
   @Input() bloggerForm: any;
   @Input() bloggerReady?: boolean; // cambia pantalla
   @Output() rejectFriends = new EventEmitter<boolean>(); // cambia pantalla

   selectedFriends: number[] = [];

   constructor(
      private bloggersService: BloggresService,
      private router: Router,
      private notification: NotificationsService
   ) {}

   ngOnInit(): void {}

   addBlogger() {
      let friendIds = this.selectedFriends.map((id) => id - 1);

      let lastId = this.bloggers.reduce((tot, curr) => {
         if (curr.id > tot) tot = curr.id;

         return tot;
      }, 0);

      let bloggerToAdd = {
         ...this.bloggerForm,
         friends: friendIds,
         id: lastId + 1,
      };

      console.log(bloggerToAdd, 'TO addd');

      this.bloggersService.addBlogger(bloggerToAdd);

      this.router.navigateByUrl('/bloggers');

      this.notification.addNoti({
         severity: 'success',
         summary: 'Excelente.',
         detail: 'Blogger agregado con éxito.',
      });
   }

   reject() {
      this.rejectFriends.emit(true);
   }
}
