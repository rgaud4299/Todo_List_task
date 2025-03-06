import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from '../../pages/courses/courses.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
