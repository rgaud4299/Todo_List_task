"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var courses_component_1 = require("../courses/courses.component");
var router_1 = require("@angular/router");
var about_component_1 = require("../about/about.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.courses = [];
        // getCourses(){
        //   const data=localStorage.getItem(Strings.STORAGE_KEY);
        //   console.log(data);
        //   if(data){
        //     this.courses=JSON.parse(data);
        //   }
        // }
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.getCourses()
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            imports: [router_1.RouterLink, courses_component_1.CoursesComponent, about_component_1.AboutComponent],
            templateUrl: './home.component.html',
            styleUrl: './home.component.css'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
