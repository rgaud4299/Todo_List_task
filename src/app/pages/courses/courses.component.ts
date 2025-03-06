import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../interface/course.interface';
import { CourseService } from '../../sevices/course/course.service';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
todo: any;
courses: any;
// @Input()courses:any[]=[];
 
  @Input()isAdmin= true;
  // @Output() del=new EventEmitter();
  private courseService=inject(CourseService);
  obj:any=this.courseService.getCourses();

  constructor ( ){
    this.getTodo('work');
  }
  
//  courses:any=this.obj;
 getTodo(arg: any) {
 this.courses=this.obj[arg];
}





deleteCourse(course:any){
    // this.del.emit(course);
  }

}




