import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list.component';
import { UserFormComponent } from './user/user-form.component';

export const appRoutes: Routes = [
    { path: 'create', component: UserFormComponent },
    { path: 'list', component: UserListComponent },
    { path: '',
      redirectTo: '/create',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];