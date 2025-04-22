import { Routes } from '@angular/router';
import { FunctionComponent } from './components/function/function.component';

export const routes: Routes = [

    { path: 'function',component: FunctionComponent},
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
  
];
