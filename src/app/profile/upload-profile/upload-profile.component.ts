import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {
  uploadProfileForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.uploadProfileForm = this.fb.group({
      profile: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required, Validators.minLength(10)]],
      documents: ['']
    });
   }

  ngOnInit(): void {
  }

}
