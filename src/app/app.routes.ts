import { provideRouter, RouterModule, withInMemoryScrolling } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { HomeComponent } from './components/page-home/home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageOrganigramaComponent } from './components/page-organigrama/page-organigrama.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: PageContactComponent },
  { path: 'organigrama', component: PageOrganigramaComponent}, 
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];

export const appRoutingProviders = [
  provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
];
