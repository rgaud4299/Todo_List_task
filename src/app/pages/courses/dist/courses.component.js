"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_service_1 = require("../../sevices/course/course.service");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        // @Input()courses:any[]=[];
        this.isAdmin = true;
        // @Output() del=new EventEmitter();
        this.courseService = core_1.inject(course_service_1.CourseService);
        this.obj = this.courseService.getCourses();
        this.getTodo('work');
    }
    //  courses:any=this.obj;
    CoursesComponent.prototype.getTodo = function (arg) {
        this.courses = this.obj[arg];
    };
    CoursesComponent.prototype.deleteCourse = function (course) {
        // this.del.emit(course);
    };
    __decorate([
        core_1.Input()
    ], CoursesComponent.prototype, "isAdmin");
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            imports: [router_1.RouterLink],
            templateUrl: './courses.component.html',
            styleUrl: './courses.component.css'
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
