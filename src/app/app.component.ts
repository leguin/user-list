import { Component } from '@angular/core';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  template: `
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
         <a class="navbar-brand" href="#">Igor&Co</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav">
             <a class="nav-item nav-link" routerLink="/create">Create</a>
             <a class="nav-item nav-link" routerLink="/list">List</a>
         </div>
  </div>
</nav>

  <router-outlet></router-outlet>
  `
})


export class AppComponent {
  title = 'User management';

  /**
   *
   */
  constructor() {
    
  }
  
}
