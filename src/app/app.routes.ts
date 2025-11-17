import { Routes } from '@angular/router';
import { FunctionComponent } from './components/function/function.component';
import { RenderListComponent } from './components/render-list/render-list.component';
import {MainComponent} from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [

    { path: 'function',component: FunctionComponent},
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'render-list',component: RenderListComponent},
      {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
    { path: 'main',component: MainComponent},
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {path: 'task',component: TaskComponent}

];
