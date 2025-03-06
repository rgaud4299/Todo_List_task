import { Routes } from '@angular/router';

export const routes: Routes = [
        {path:'about',loadComponent:()=>import('./pages/about/about.component').then((c)=>c.AboutComponent)},
        {path:'admin',loadComponent:()=>import('./pages/admin/admin.component').then((c)=>c.AdminComponent)},
        {path:'',loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent)},
        {path:'courses',loadComponent:()=>import('./pages/courses/courses.component').then((c)=>c.CoursesComponent)},

 ];
