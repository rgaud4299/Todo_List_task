import { Component } from '@angular/core';
import { CoursesComponent } from "../courses/courses.component";
import { RouterLink } from '@angular/router';
 import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CoursesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
courses: any[]=[];
ngOnInit(){
  // this.getCourses()
}

// getCourses(){
//   const data=localStorage.getItem(Strings.STORAGE_KEY);
//   console.log(data);
//   if(data){
//     this.courses=JSON.parse(data);

//   }
// }
}
