import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Diagnose } from './pages/diagnose/diagnose';
import { Guide } from './pages/guide/guide';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'diagnose', component:Diagnose},
    {path: 'guide', component:Guide},
    {path: 'about', component:About},
    {path:'**', redirectTo:''} // Page inconnu --> home
];
