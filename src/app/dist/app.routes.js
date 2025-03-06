"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    { path: 'about', loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/about/about.component'); }).then(function (c) { return c.AboutComponent; }); } },
    { path: 'admin', loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/admin/admin.component'); }).then(function (c) { return c.AdminComponent; }); } },
    { path: '', loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/home/home.component'); }).then(function (c) { return c.HomeComponent; }); } },
    { path: 'courses', loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/courses/courses.component'); }).then(function (c) { return c.CoursesComponent; }); } },
];
