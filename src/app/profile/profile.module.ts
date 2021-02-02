import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [ProfileListComponent, UploadProfileComponent, ViewProfileComponent, EditProfileComponent, DisplayProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ...materialModules,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
