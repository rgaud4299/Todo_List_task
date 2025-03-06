import { Component } from '@angular/core';
// import { NgIf } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})


export class AdminComponent {
  model: any = {};
  cover!: string | null;
  showError = false;
  cover_file: any;
  courses: any[] = [];

  ngOnInit() {
    // this.courses();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover = file;
      const render = new FileReader();
      render.onload = () => {
        const dataUrl = render.result!.toString();
        this.cover = dataUrl;
      };
      render.readAsDataURL(file);
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('form invalid');
      form.control.markAllAsTouched();

      if (!this.cover) {
        this.showError = true;
      }
      return;
    }
    this.saveCourse(form);
  }

  clearForm(form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }

  saveCourse(form: NgForm) {
    const formValue = form.value;
    console.log(formValue);
    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };
    this.courses = [...this.courses, data];

    this.setItem(this.courses);
    this.clearForm(form);
  }

  // deleteCourse(course: any) {
  //   // this.courses = this.courses.filter(
  //   //   (course_item) => course_item.id != course.id
  //   // );
  //   // this.setItem(this.courses);
  // }

  setItem(data: any) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
    const dat = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(dat);
  }
}
