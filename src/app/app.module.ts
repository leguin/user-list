import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UserListComponent } from './user/user-list.component';
import { UserFormComponent } from './user/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent, 
    UserFormComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
