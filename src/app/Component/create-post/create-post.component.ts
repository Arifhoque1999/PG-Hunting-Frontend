import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  countries: any[] = [];
  cities: City[] | undefined;
  createPostForm: FormGroup | any;
  selectedFile: any;
  selectedFileUrl: any;

  constructor(private formBulder: FormBuilder) {}

  states: any[] = [
    { name: 'Pg', code: 'class 3 ' },
    { name: 'Room', value: 'class 2' },
    { name: 'Flat', code: 'class' },
    { name: 'Flat 1 BHK', code: 'class 1' },
    { name: 'other', code: 'other' },
  ];

  ngOnInit() {
    this.createPostForm = this.formBulder.group({
      postTitle: ['', Validators.required],
      roomType: ['', Validators.required],
      roomPrice: ['', Validators.required],
      wifi: ['No', Validators.required],
      food: ['No', Validators.required],
      roomShare: ['No', Validators.required],
      states: ['', Validators.required],
      localArea: ['', Validators.required],
      pinCode: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      // Read the  file as a data URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // e.target.result contains the data URL representing the selected image
        this.selectedFileUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  createPost() {
    if (this.createPostForm.valid) {
      const postData = {
        data: this.createPostForm.value,
        image: this.selectedFileUrl,
      };
      console.log(postData);
    }
  }
}
