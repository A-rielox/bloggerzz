import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BloggersListComponent } from './bloggers/bloggers-list/bloggers-list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'bloggers', component: BloggersListComponent },
   { path: 'add-blogger', component: AddComponent },
   { path: 'edit', component: EditComponent },
];
// add-blogger
@NgModule({
   imports: [
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
   ],
   exports: [RouterModule],
})
export class AppRoutingModule {}
