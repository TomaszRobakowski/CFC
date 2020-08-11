import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFormComponent } from './main-form/main-form.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'cfc',
      pathMatch: 'full',
    },
    {
      path: 'cfc',
      component: MainFormComponent,
      data: {
        title: 'CFC'
      }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
