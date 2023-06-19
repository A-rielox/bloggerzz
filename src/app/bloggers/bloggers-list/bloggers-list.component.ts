import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Blogger } from 'src/app/_models/blogger';
import { bloggerWithF } from 'src/app/_models/bloggerWithF';
import { BloggresService } from 'src/app/_services/bloggres.service';
import { NotificationsService } from 'src/app/notifications/notifications.service';

interface SearchForm {
   name: string;
   website: string;
}

@Component({
   selector: 'app-bloggers-list',
   templateUrl: './bloggers-list.component.html',
   styleUrls: ['./bloggers-list.component.css'],
   providers: [ConfirmationService],
})
export class BloggersListComponent implements OnInit {
   bloggers: Blogger[] = [];
   bloggersWithF: bloggerWithF[] = [];

   searchForm: SearchForm = {} as SearchForm;
   /////////////////
   visible: boolean = false;
   bloggerSelected?: bloggerWithF;

   constructor(
      private bloggersService: BloggresService,
      private router: Router,
      private confirmationService: ConfirmationService,
      private notification: NotificationsService
   ) {}

   ngOnInit(): void {
      this.loadBloggers();
      this.includeFriends();
   }

   loadBloggers() {
      this.bloggers = this.bloggersService.bloggers;
   }

   filterBloggers() {
      this.loadBloggers();
      this.includeFriends();
      let filtered = this.bloggersWithF;

      if (this.searchForm.name) {
         filtered = this.bloggersWithF.filter((b) => {
            return b.name
               .toLowerCase()
               .includes(this.searchForm.name.toLowerCase());
         });
      }

      if (this.searchForm.website) {
         filtered = filtered.filter((b) => {
            return b.website
               .toLowerCase()
               .includes(this.searchForm.website.toLowerCase());
         });
      }

      this.bloggersWithF = filtered;

      // if (this.searchForm.name) {
      //    let wf: bloggerWithF[] = this.bloggers
      //       .filter((b) => {
      //          return b.name
      //             .toLowerCase()
      //             .includes(this.searchForm.name.toLowerCase());
      //       })
      //       .map((b) => {
      //          let friendsIdxs = b.friends;

      //          let friendsNames = friendsIdxs
      //             .map((idx) => {
      //                let blogger = this.bloggers.find((b) => b.id === idx);

      //                if (!blogger) return '';

      //                return blogger.name;
      //             })
      //             .filter((f) => f !== '');

      //          // return friendsNames;
      //          return { ...b, friends: friendsNames };
      //       });

      //    this.bloggersWithF = wf;
      // }

      // if (this.searchForm.website) {
      //    let wf: bloggerWithF[] = this.bloggers
      //       .filter((b) => {
      //          return b.website.includes(this.searchForm.website);
      //       })
      //       .map((b) => {
      //          let friendsIdxs = b.friends;

      //          let friendsNames = friendsIdxs
      //             .map((idx) => {
      //                let blogger = this.bloggers.find((b) => b.id === idx);

      //                if (!blogger) return '';

      //                return blogger.name;
      //             })
      //             .filter((f) => f !== '');

      //          // return friendsNames;
      //          return { ...b, friends: friendsNames };
      //       });

      //    this.bloggersWithF = wf;
      // }
   }

   quitarFiltro() {
      this.loadBloggers();
      this.includeFriends();
      this.searchForm.name = '';
      this.searchForm.website = '';
   }

   editBlog(blogId: number) {
      let blogger = this.bloggers.find((b) => b.id === blogId);

      const navigationExtras: NavigationExtras = {
         state: { blogger: blogger },
      };

      this.router.navigateByUrl('/edit', navigationExtras);
   }

   includeFriends() {
      let wf: bloggerWithF[] = this.bloggers.map((b) => {
         let friendsIdxs = b.friends;

         let friendsNames = friendsIdxs
            .map((idx) => {
               let blogger = this.bloggers.find((b) => b.id === idx);

               if (!blogger) return '';

               return blogger.name;
            })
            .filter((f) => f !== '');

         // return friendsNames;
         return { ...b, friends: friendsNames };
      });

      this.bloggersWithF = wf;
   }

   // pop-up de confirmar borrado
   confirm(event: Event, blogger: bloggerWithF) {
      if (!event.target) return;

      this.confirmationService.confirm({
         target: event.target as EventTarget,
         message: 'Confirmas que quieres borrar este blogger?',
         acceptLabel: 'Si',
         rejectLabel: 'No',
         icon: 'pi pi-exclamation-triangle',
         accept: () => {
            if (!this.bloggers) return;

            this.bloggersService.deleteBlogger(blogger.id);

            this.loadBloggers();
            this.includeFriends();

            this.notification.addNoti({
               severity: 'success',
               summary: 'Listo',
               detail: 'Blogger borrado',
            });
         },
         reject: () => {},
      });
   }

   showDialog(blogger: bloggerWithF) {
      this.visible = true;

      this.bloggerSelected = blogger;
   }

   border2Color(id: number) {
      let lastDigit = id
         .toString()
         .split('')
         .map((el) => +el)
         .reverse()[0];

      switch (lastDigit) {
         case 0:
         case 5:
            return 'border-color: #06d465';

         case 1:
         case 6:
            return 'border-color: #eae91c';

         case 2:
         case 7:
            return 'border-color: #f91616';

         case 3:
         case 8:
            return 'border-color: #cc63f1';

         default:
            return 'border-color: #06b6d4';

         //  #eae91c   #6d1e70   #cc63f1   #6366f1   #f97316'
      }
   }
}
