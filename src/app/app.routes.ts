import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent() {
      return import('./pages/home/home.component').then(m => m.HomeComponent);
    },
  },
  {
    path: "post/:postId",
    loadComponent: () => {
      return import('./pages/details/details.component').then(m => m.PostDetailsComponent);
    }
  }
];
