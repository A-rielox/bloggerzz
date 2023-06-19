import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloggresService } from '../_services/bloggres.service';
import { Blogger } from '../_models/blogger';

@Component({
   selector: 'app-add',
   templateUrl: './add.component.html',
   styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
   bloggers: Blogger[] = [];
   bloggerForm: FormGroup = new FormGroup({});

   bloggerReady: boolean = false;

   constructor(
      private bloggersService: BloggresService,
      private fb: FormBuilder
   ) {}

   ngOnInit(): void {
      this.loadBloggers();
      this.initializeForm();
   }

   loadBloggers() {
      this.bloggers = this.bloggersService.bloggers;
   }

   initializeForm() {
      this.bloggerForm = this.fb.group({
         name: ['', Validators.required],
         website: ['', Validators.required],
         picture_url: [''],
         email: ['', Validators.required],
         friends: [[]],
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
