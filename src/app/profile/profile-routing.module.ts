import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileListComponent
  },
  {
    path: 'upload',
    component: UploadProfileComponent
  },
  {
    path: ':id/edit',
    component: EditProfileComponent
  },
  {
    path: ':id/view',
    component: ViewProfileComponent
  },
  {
    path: 'overview',
    component: DisplayProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
