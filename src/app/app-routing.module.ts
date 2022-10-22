import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsidemenuComponent } from './layout/asidemenu/asidemenu.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ComplainsComponent } from './complains/complains.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'asidemenu', component: AsidemenuComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'complains', component: ComplainsComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
