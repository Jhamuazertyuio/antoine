import { Routes } from '@angular/router';
import { UserProfile } from './components/accueil.component';
export const routes: Routes = [
    {
        path: '**',
        component: UserProfile
    }
];
