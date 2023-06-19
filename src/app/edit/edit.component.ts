import { Component, OnInit } from '@angular/core';
import { BloggresService } from '../_services/bloggres.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blogger } from '../_models/blogger';

@Component({
   selector: 'app-edit',
   templateUrl: './edit.component.html',
   styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
   blogger: Blogger;
   /////////////////////
   bloggers: Blogger[] = [];
   bloggerForm: FormGroup = new FormGroup({});
   bloggerReady: boolean = false;

   constructor(
      private bloggersService: BloggresService,
      private fb: FormBuilder,
      private router: Router
   ) {
      const navigation = this.router.getCurrentNavigation();

      if (!navigation?.extras?.state?.['blogger'])
         router.navigateByUrl('/bloggers');

      this.blogger = navigation?.extras?.state?.['blogger'];
   }

   ngOnInit(): void {
      this.loadBloggers();
      this.initializeForm();
   }

   loadBloggers() {
      this.bloggers = this.bloggersService.bloggers;
   }

   initializeForm() {
      this.bloggerForm = this.fb.group({
         name: [this.blogger.name, Validators.required],
         website: [this.blogger.website, Validators.required],
         picture_url: [this.blogger.picture_url],
         email: [this.blogger.email, Validators.required],
         friends: [this.blogger.friends],
         id: [this.blogger.id],
      });
   }

   addFriend() {
      // console.log(this.polizaForm.value, 'xs');
      this.bloggerReady = true;

      console.log(this.bloggerForm.value, 'form');
   }

   rejectAddFriend() {
      this.bloggerReady = false;
   }
}
