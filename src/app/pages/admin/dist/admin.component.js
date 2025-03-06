"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
// import { NgIf } from '@angular/common';
var forms_1 = require("@angular/forms");
var courses_component_1 = require("../courses/courses.component");
var strings_enum_1 = require("../../enum/strings.enum");
var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.model = {};
        this.showError = false;
        this.courses = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.courses();
    };
    AdminComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            this.cover = file;
            var render_1 = new FileReader();
            render_1.onload = function () {
                var dataUrl = render_1.result.toString();
                _this.cover = dataUrl;
            };
            render_1.readAsDataURL(file);
            this.showError = false;
        }
    };
    AdminComponent.prototype.onSubmit = function (form) {
        if (form.invalid || !this.cover) {
            console.log('form invalid');
            form.control.markAllAsTouched();
            if (!this.cover) {
                this.showError = true;
            }
            return;
        }
        this.saveCourse(form);
    };
    AdminComponent.prototype.clearForm = function (form) {
        form.reset();
        this.cover = null;
        this.cover_file = null;
    };
    AdminComponent.prototype.saveCourse = function (form) {
        var formValue = form.value;
        console.log(formValue);
        var data = __assign(__assign({}, formValue), { image: this.cover, id: this.courses.length + 1 });
        this.courses = __spreadArrays(this.courses, [data]);
        this.setItem(this.courses);
        this.clearForm(form);
    };
    // deleteCourse(course: any) {
    //   // this.courses = this.courses.filter(
    //   //   (course_item) => course_item.id != course.id
    //   // );
    //   // this.setItem(this.courses);
    // }
    AdminComponent.prototype.setItem = function (data) {
        localStorage.setItem(strings_enum_1.Strings.STORAGE_KEY, JSON.stringify(data));
        var dat = localStorage.getItem(strings_enum_1.Strings.STORAGE_KEY);
        console.log(dat);
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            standalone: true,
            imports: [forms_1.FormsModule, courses_component_1.CoursesComponent],
            templateUrl: './admin.component.html',
            styleUrl: './admin.component.css'
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
