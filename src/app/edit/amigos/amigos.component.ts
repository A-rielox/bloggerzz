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
   @Input() bloggerForm: Blogger = {} as Blogger;
   @Input() bloggerReady?: boolean; // cambia pantalla
   @Output() rejectFriends = new EventEmitter<boolean>(); // cambia pantalla

   selectedFriends: number[] = [];

   constructor(
      private bloggersService: BloggresService,
      private router: Router,
      private notification: NotificationsService
   ) {}

   ngOnInit(): void {
      this.selectedFriends = this.bloggerForm.friends.map((id) => id + 1);
   }

   addBlogger() {
      let friendIds = this.selectedFriends.map((id) => id - 1);

      let bloggerToAdd = {
         ...this.bloggerForm,
         friends: friendIds,
      };

      this.bloggersService.editBlogger(bloggerToAdd);

      this.router.navigateByUrl('/bloggers');

      this.notification.addNoti({
         severity: 'success',
         summary: 'Genial.',
         detail: 'Blogger editado con éxito.',
      });
   }

   reject() {
      this.rejectFriends.emit(true);
   }
}
