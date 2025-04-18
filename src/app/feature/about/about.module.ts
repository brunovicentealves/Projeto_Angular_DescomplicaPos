import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';
import { authGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [AboutComponent],
})
export class AboutModule {}
